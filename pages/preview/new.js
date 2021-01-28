import React from "react";
import { chakra, Box,  Flex, useColorModeValue } from "@chakra-ui/react";

export default function Component() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
    
    </Flex>
  );
}
