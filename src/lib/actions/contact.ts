"use server";

import { validateContactForm, type ContactFormErrors } from "@/lib/validation/contactForm";

export interface ContactFormState {
  success: boolean;
  errors: ContactFormErrors & { general?: string };
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { success: true, errors: {} };
  }

  const name = (formData.get("name") as string) ?? "";
  const email = (formData.get("email") as string) ?? "";
  const message = (formData.get("message") as string) ?? "";

  const validationErrors = validateContactForm({ name, email, message });
  if (Object.keys(validationErrors).length > 0) {
    return { success: false, errors: validationErrors };
  }

  const payload = { name: name.trim(), email: email.trim(), message: message.trim() };
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    } catch {
      return { success: false, errors: { general: "Something went wrong. Please try again." } };
    }
  } else {
    console.log("[Contact Form]", payload);
  }

  return { success: true, errors: {} };
}
