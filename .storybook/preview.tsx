// .storybook/preview.tsx
import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
import { geistMono, geistSans } from "../src/lib/styles/fonts";
import nextIntl from "./next-intl";

const preview: Preview = {
  initialGlobals: {
    locale: "en",
    locales: {
      en: "English",
      da: "Dansk",
    },
  },
  decorators: [
    (Story) => {
      document.documentElement.classList.add(
        geistSans.variable,
        geistMono.variable,
        "antialiased"
      );
      return <Story />;
    },
  ],
  parameters: {
    nextIntl,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
