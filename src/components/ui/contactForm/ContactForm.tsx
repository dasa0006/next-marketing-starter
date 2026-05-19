"use client";

import { useActionState, useState } from "react";
import { useTranslations } from "next-intl";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";
import { validateContactForm, formatContactErrors } from "@/lib/validation/contactForm";
import { ContactFormField, FIELDS } from "./ContactForm.types";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/button/Button";
import { Send, CheckCircle } from "lucide-react";

const initialState: ContactFormState = { success: false, errors: {} };

export const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [clientErrors, setClientErrors] = useState<ContactFormState["errors"]>({});

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as ContactFormField;
    const fieldErrors = validateContactForm({ [field]: e.target.value });
    setClientErrors((prev) => {
      const next = { ...prev };
      if (fieldErrors[field]) next[field] = fieldErrors[field];
      else delete next[field];
      return next;
    });
  };

  const mergedRaw = { ...state.errors, ...clientErrors };
  const displayErrors = state.success ? {} : formatContactErrors(mergedRaw, t);

  const fieldError = (field: ContactFormField) => displayErrors[field] ?? "";

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="mb-4 size-12 text-feedback-success" />
        <p className="text-lg font-medium text-text-primary">{t("success")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="absolute -left-2499.75" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {FIELDS.map(({ name, type }) => (
        <FormField
          key={name}
          name={name}
          type={type}
          label={t(`${name}Label`)}
          placeholder={t(`${name}Placeholder`)}
          error={fieldError(name)}
          onBlur={handleBlur}
        />
      ))}

      {state.errors?.general && (
        <div className="rounded-card bg-feedback-error/10 p-4 text-sm text-feedback-error">
          {state.errors.general}
        </div>
      )}

      <Button type="submit" isLoading={isPending} rightIcon={<Send size={16} />}>
        {t("submit")}
      </Button>
    </form>
  );
};
