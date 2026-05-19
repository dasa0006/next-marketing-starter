import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MobileDrawer from "./MobileDrawer";

const meta = {
  component: MobileDrawer,
} satisfies Meta<typeof MobileDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
  },
};
