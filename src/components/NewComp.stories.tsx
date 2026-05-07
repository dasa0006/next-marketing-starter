import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { NewComp } from "./NewComp";

const meta = {
  component: NewComp,
} satisfies Meta<typeof NewComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
