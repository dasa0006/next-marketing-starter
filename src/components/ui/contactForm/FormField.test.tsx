import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormField } from "./FormField";

afterEach(cleanup);

const baseProps = {
  name: "name" as const,
  label: "Full name",
  placeholder: "Enter your name",
  error: "",
  onBlur: vi.fn(),
};

describe("FormField", () => {
  it("renders label and input", () => {
    render(<FormField {...baseProps} />);
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("renders input element for text type", () => {
    render(<FormField {...baseProps} />);
    const input = screen.getByLabelText("Full name");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders textarea when type is textarea", () => {
    render(<FormField {...baseProps} name="message" type="textarea" label="Message" placeholder="Tell us…" />);
    const el = screen.getByPlaceholderText("Tell us…");
    expect(el.tagName).toBe("TEXTAREA");
  });

  it("shows error message when error prop is set", () => {
    render(<FormField {...baseProps} error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("does not render error paragraph when error is empty", () => {
    render(<FormField {...baseProps} />);
    expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
  });

  it("applies error styling when error is present", () => {
    render(<FormField {...baseProps} error="Required" />);
    const input = screen.getByLabelText("Full name");
    expect(input.className).toMatch(/border-feedback-error/);
  });

  it("calls onBlur when input loses focus", async () => {
    const onBlur = vi.fn();
    const user = userEvent.setup();
    render(<FormField {...baseProps} onBlur={onBlur} />);
    const input = screen.getByLabelText("Full name");
    await user.click(input);
    await user.tab();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("forwards the field name to onBlur target", async () => {
    const onBlur = vi.fn();
    const user = userEvent.setup();
    render(<FormField {...baseProps} onBlur={onBlur} />);
    const input = screen.getByLabelText("Full name");
    await user.click(input);
    await user.tab();
    expect(onBlur.mock.calls[0][0].target.name).toBe("name");
  });

  it("sets correct id on input and for on label", () => {
    render(<FormField {...baseProps} />);
    const input = screen.getByLabelText("Full name");
    expect(input).toHaveAttribute("id", "name");
  });
});
