import React from "react";
import { Flex } from "@chakra-ui/react";

const Choc = () => {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    ></Flex>
  );
};

export default Choc;
