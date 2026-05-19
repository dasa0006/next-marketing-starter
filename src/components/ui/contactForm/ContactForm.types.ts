import { ContactFormField } from "@/lib/validation/contactForm";
export type { ContactFormField };

export interface FieldDef {
  name: ContactFormField;
  type: "text" | "email" | "textarea";
}

export const FIELDS: FieldDef[] = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "message", type: "textarea" },
];
