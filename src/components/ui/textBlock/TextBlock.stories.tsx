import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TextBlock } from "./TextBlock";

const meta = {
  component: TextBlock,
} satisfies Meta<typeof TextBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Text Block Heading",
    body: "This is the body text of the TextBlock component. It supports both heading and body content with configurable alignment.",
  },
};

export const BodyOnly: Story = {
  args: {
    body: "A TextBlock can render body text without a heading when needed.",
  },
};

export const Centered: Story = {
  args: {
    heading: "Centered Content",
    body: "This content is centered on the page. The component automatically constrains the text width and centers it within the container.",
    alignment: "center",
  },
};

export const RightAligned: Story = {
  args: {
    heading: "Right Aligned",
    body: "This content is aligned to the right side of the container.",
    alignment: "right",
  },
};

export const CustomHeadingLevel: Story = {
  args: {
    heading: "H3 Heading Level",
    headingLevel: "h3",
    body: "The heading level can be customized from h1 through h4 using the headingLevel prop.",
  },
};
