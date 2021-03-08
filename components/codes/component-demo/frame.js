import { ChakraProvider, useTheme } from "@chakra-ui/react";
import React from "react";

const Frame = ({ children }) => {
  const theme = useTheme();
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Frame;
