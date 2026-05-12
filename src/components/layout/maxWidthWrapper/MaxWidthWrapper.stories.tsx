import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MaxWidthWrapper } from "./MaxWidthWrapper";

const meta = {
  component: MaxWidthWrapper,
} satisfies Meta<typeof MaxWidthWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};
