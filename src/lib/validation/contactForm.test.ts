import { describe, it, expect } from "vitest";
import { validateContactForm, formatContactErrors, type ContactFormErrorCode } from "./contactForm";

const t = (key: string) => key;

describe("validateContactForm", () => {
  it("returns no errors for valid data", () => {
    expect(validateContactForm({ name: "John", email: "john@example.com", message: "Hello World!!" })).toEqual({});
  });

  it("validates name is required", () => {
    expect(validateContactForm({ name: "" }).name).toBe("name.required");
  });

  it("validates name minimum length", () => {
    expect(validateContactForm({ name: "A" }).name).toBe("name.tooShort");
  });

  it("validates email format", () => {
    expect(validateContactForm({ email: "notanemail" }).email).toBe("email.invalid");
  });

  it("validates message required", () => {
    expect(validateContactForm({ message: "" }).message).toBe("message.required");
  });

  it("validates message minimum length", () => {
    expect(validateContactForm({ message: "Hi" }).message).toBe("message.tooShort");
  });

  it("skips validation for undefined fields", () => {
    expect(validateContactForm({})).toEqual({});
  });
});

describe("formatContactErrors", () => {
  it("formats single field error", () => {
    const errors = { name: "name.required" as ContactFormErrorCode };
    expect(formatContactErrors(errors, t)).toEqual({ name: "ContactForm.errors.nameRequired" });
  });

  it("formats multiple field errors", () => {
    const errors = {
      name: "name.required" as ContactFormErrorCode,
      email: "email.invalid" as ContactFormErrorCode,
    };
    expect(formatContactErrors(errors, t)).toEqual({
      name: "ContactForm.errors.nameRequired",
      email: "ContactForm.errors.emailInvalid",
    });
  });

  it("returns empty object for no errors", () => {
    expect(formatContactErrors({}, t)).toEqual({});
  });

  it("ignores unknown error codes or extra keys", () => {
    const errors = { name: "name.required" as ContactFormErrorCode, general: "Server error" };
    expect(formatContactErrors(errors, t)).toEqual({ name: "ContactForm.errors.nameRequired" });
  });
});
