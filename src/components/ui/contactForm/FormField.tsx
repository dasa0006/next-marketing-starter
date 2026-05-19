"use client";

import { cn } from "@/lib/utils";
import { ContactFormField } from "./ContactForm.types";

const inputBase =
  "w-full rounded-card border border-border-default bg-surface-base px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus";
const inputError = "border-feedback-error focus:ring-feedback-error/30 focus:border-feedback-error";

interface FormFieldProps {
  name: ContactFormField;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "textarea";
  error: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FormField = ({ name, label, placeholder, type = "text", error, onBlur }: FormFieldProps) => {
  const shared = {
    id: name,
    name,
    placeholder,
    onBlur,
    className: cn(inputBase, type === "textarea" && "resize-y", error && inputError),
  };

  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-text-primary">
        {label}
      </label>
      {type === "textarea" ? <textarea rows={5} {...shared} /> : <input type={type} {...shared} />}
      {error && <p className="mt-1 text-sm text-feedback-error">{error}</p>}
    </div>
  );
};
