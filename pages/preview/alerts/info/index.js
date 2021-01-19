import React from "react";
import {
  chakra,
  Box,
  Container,
  Icon,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import { IoMdAlert } from "react-icons/io";

const Ma = () => {
  return (
    <Container
      pos="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      bg="gray.600"
      p={50}
      width="3xl"
      centerContent
    >
      <Flex
        maxW="sm"
        width="100%"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="md"
        borderRadius="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg="blue.500">
          <Icon as={IoMdAlert} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue("blue.500", "blue.400")}
              fontWeight="bold"
            >
              Info
            </chakra.span>
            <chakra.p
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize="sm"
            >
              This channel archived by the owner!{" "}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Ma;
