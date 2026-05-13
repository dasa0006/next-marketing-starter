import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ToggleMode from "./ToggleMode";

const meta = {
  component: ToggleMode,
} satisfies Meta<typeof ToggleMode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
