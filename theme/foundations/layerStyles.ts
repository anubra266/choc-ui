import { BoxProps } from "@chakra-ui/react";
import { mode } from "./styles-mode";

const layerStyles: { [key: string]: BoxProps } = {
  card: {
    ...mode("bg", "white", "gray.700"),
    shadow: "base",
  },
};
export default layerStyles;
