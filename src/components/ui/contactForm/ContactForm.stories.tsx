import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContactForm } from "./ContactForm";

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
  parameters: {
    layout: "centered",
    a11y: { test: "todo" },
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
