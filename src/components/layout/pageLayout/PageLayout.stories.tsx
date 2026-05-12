import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PageLayout from "./PageLayout";

const meta = {
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      { sectionID: "Section 1", section: <>Section 1</> },
      { sectionID: "Section 2", section: <>Section 2</> },
      { sectionID: "Section 3", section: <>Section 3</> },
    ],
    pageTitle: "pageTitle",
  },
};
