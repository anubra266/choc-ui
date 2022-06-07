import type { ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { fonts } from "~/theme/fonts";
import { styles } from "~/theme/styles";
import { semanticTokens } from "~/theme/semantic-tokens";

export const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
  },
};

const overrides: ThemeOverride = {
  colors,
  config,
  semanticTokens,
  styles,
  fonts,
};

export const theme = extendTheme(overrides);
