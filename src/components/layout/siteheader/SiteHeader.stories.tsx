import { Meta, StoryObj } from "@storybook/nextjs-vite";
import SiteHeader from "./SiteHeader";
import {
  mockSiteHeaderMinimal,
  mockSiteHeaderNavOnly,
  mockSiteHeaderProps,
  mockSiteHeaderTransparent,
  mockSiteHeaderWithLocaleSwitcher,
} from "./SiteHeader.mocks";

const meta = {
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
    // Disable the default padding that Storybook adds, so the sticky
    // header actually sticks to the viewport top.
    docs: { story: { inline: false, iframeHeight: 500 } },
  },
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Individual variants ──────────────────────────────────────────────────────

export const Solid: Story = {
  args: mockSiteHeaderProps,
};

export const Transparent: Story = {
  args: mockSiteHeaderTransparent,
  parameters: {
    docs: {
      description: {
        story:
          "The transparent variant is designed to sit over a full-bleed hero image. Scroll down in the preview to see it solidify.",
      },
    },
  },
};

export const Minimal: Story = {
  args: mockSiteHeaderMinimal,
};

export const NavOnly: Story = {
  args: mockSiteHeaderNavOnly,
};

// ─── Composition ─────────────────────────────────────────────────────────────

export const MockHero = () => {
  return <div className="min-h-screen bg-red">Hero</div>;
};

/**
 * Full-page composition showing the SiteHeader above a Hero section.
 * Resize the viewport to test the mobile drawer.
 */
export const WithHero: Story = {
  render: () => (
    <div className="min-h-[200vh]">
      <SiteHeader {...mockSiteHeaderProps} />
      <MockHero />
    </div>
  ),
};

export const TransparentWithHero: Story = {
  render: () => (
    <div className="min-h-[200vh]">
      <SiteHeader {...mockSiteHeaderTransparent} />
      {/* Negative margin pulls the hero up behind the transparent SiteHeader */}
      <div className="-mt-16">
        <MockHero />
      </div>
    </div>
  ),
};

export const WithLocaleSwitcher: Story = {
  args: mockSiteHeaderWithLocaleSwitcher,
};
