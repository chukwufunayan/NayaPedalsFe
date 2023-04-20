/** @type { import('@storybook/react').Preview } */
import { theme } from "../src/utility/theme";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    chakra: {
      theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
