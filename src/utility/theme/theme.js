// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { styles } from "./global.theme";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles,
  colors: {
    nayaPedalsColor: {
      darkGrey: "#313131",
      midGrey: "#A3A3A3",
      lightGrey: "#D9D9D9",
      red: "#CE1A2B",
    },
  },
  fontSizes: {
    xxs: "0.625rem",
  },
  proTheme,
});
