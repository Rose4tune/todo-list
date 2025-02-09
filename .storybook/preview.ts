import type { Preview } from "@storybook/react";
import "@/public/css/global.css";
import "@/public/css/style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
