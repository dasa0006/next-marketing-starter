export type ContactFormField = "name" | "email" | "message";

export type ContactFormErrorCode =
  | "name.required"
  | "name.tooShort"
  | "email.required"
  | "email.invalid"
  | "message.required"
  | "message.tooShort";

export type ContactFormErrors = Partial<Record<ContactFormField, ContactFormErrorCode>>;

const errorCodeToKey: Record<ContactFormErrorCode, string> = {
  "name.required": "ContactForm.errors.nameRequired",
  "name.tooShort": "ContactForm.errors.nameMinLength",
  "email.required": "ContactForm.errors.emailRequired",
  "email.invalid": "ContactForm.errors.emailInvalid",
  "message.required": "ContactForm.errors.messageRequired",
  "message.tooShort": "ContactForm.errors.messageMinLength",
};

export function formatContactErrors(
  errors: Record<string, string | undefined>,
  t: (key: string) => string
): Partial<Record<ContactFormField, string>> {
  const result: Partial<Record<ContactFormField, string>> = {};
  for (const field of ["name", "email", "message"] as ContactFormField[]) {
    const code = errors[field];
    if (code) {
      const key = errorCodeToKey[code as ContactFormErrorCode];
      if (key) result[field] = t(key);
    }
  }
  return result;
}

export function validateContactForm(data: {
  name?: string;
  email?: string;
  message?: string;
}): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.name !== undefined) {
    const v = data.name.trim();
    if (!v) errors.name = "name.required";
    else if (v.length < 2) errors.name = "name.tooShort";
  }

  if (data.email !== undefined) {
    const v = data.email.trim();
    if (!v) errors.email = "email.required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errors.email = "email.invalid";
  }

  if (data.message !== undefined) {
    const v = data.message.trim();
    if (!v) errors.message = "message.required";
    else if (v.length < 10) errors.message = "message.tooShort";
  }

  return errors;
}
