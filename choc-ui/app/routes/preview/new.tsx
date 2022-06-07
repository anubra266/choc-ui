import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const Choc = () => {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
       bg="#F9FAFB"
      _dark={{ bg: "gray.600" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    ></Flex>
  );
}
