// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
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
});
