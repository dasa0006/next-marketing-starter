import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PrimaryLayout from "./PrimaryLayout";

const meta = {
  component: PrimaryLayout,
} satisfies Meta<typeof PrimaryLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};
