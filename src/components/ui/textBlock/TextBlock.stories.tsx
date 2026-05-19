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

export const WithImageTop: Story = {
  args: {
    heading: "Image Above Text",
    body: "When imagePosition is set to top, the image renders above the text content in a stacked layout. This is the default behavior.",
    image: {
      src: "/sample.jpg",
      alt: "Sample landscape photograph",
      width: 800,
      height: 400,
    },
    imagePosition: "top",
  },
};

export const WithImageLeft: Story = {
  args: {
    heading: "Image on the Left",
    body: "With imagePosition set to left, the image and text sit side by side on larger screens. On mobile they stack vertically with the image on top.",
    image: {
      src: "/sample.jpg",
      alt: "Sample landscape photograph",
      width: 600,
      height: 400,
    },
    imagePosition: "left",
  },
};

export const WithImageRight: Story = {
  args: {
    heading: "Image on the Right",
    body: "With imagePosition set to right, the text appears first and the image follows on larger screens. On mobile it stacks with the image below the text.",
    image: {
      src: "/sample.jpg",
      alt: "Sample landscape photograph",
      width: 600,
      height: 400,
    },
    imagePosition: "right",
  },
};
