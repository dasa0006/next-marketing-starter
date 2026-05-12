import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Section } from "./Section";

const meta = {
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};

export const Subtle: Story = {
  args: {
    children: <></>,
    background: "subtle",
  },
};

export const Dark: Story = {
  args: {
    children: <></>,
    background: "dark",
  },
};

export const Accent: Story = {
  args: {
    children: <></>,

    background: "accent",
  },
};
