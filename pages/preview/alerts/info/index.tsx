import React from "react";
import { Box, Flex, Icon, chakra } from "@chakra-ui/react";

import { IoMdAlert } from "react-icons/io";

const Choc = () => {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="sm"
        w="full"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg="blue.500">
          <Icon as={IoMdAlert} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color="blue.500"
              _dark={{ color: "blue.400" }}
              fontWeight="bold"
            >
              Info
            </chakra.span>
            <chakra.p
              color="gray.600"
              _dark={{ color: "gray.200" }}
              fontSize="sm"
            >
              This channel archived by the owner!{" "}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Choc;
