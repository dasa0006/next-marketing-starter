import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Image } from "./Image";

const meta = {
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/sample.jpg",
    alt: "A descriptive alt text",
    width: 800,
    height: 600,
  },
};
