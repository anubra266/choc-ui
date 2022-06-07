import type { ThemeOverride } from "@chakra-ui/react";

export const semanticTokens: ThemeOverride["semanticTokens"] = {
  colors: {
    "layout.card": {
      _dark: "blackAlpha.50",
    },
    inactiveBg: {
      default: "gray.50",
      _dark: "blackAlpha.300",
    },
    inactiveResultsTextColor: {
      default: "gray.900",
      _dark: "gray.100",
    },
    inactiveResultsIconColor: {
      default: "gray.900",
      _dark: "gray.400",
    },
  },
};
