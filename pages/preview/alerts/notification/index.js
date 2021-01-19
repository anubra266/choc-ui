import React from "react";
import {
  chakra,
  Box,
  Container,
  Flex,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";

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
        <Flex w={2} bg={useColorModeValue("gray.800", "gray.900")}></Flex>

        <Flex alignItems="center" px={2} py={3}>
          <Avatar
            boxSize={10}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Box mx={3}>
            <chakra.p color={useColorModeValue("gray.600", "gray.200")}>
              Dan has replied on the{" "}
              <chakra.a
                color={useColorModeValue("blue.500", "blue.300")}
                _hover={{ color: "blue.400", textDecor: "underline" }}
              >
                uploaded image
              </chakra.a>
              .
            </chakra.p>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Ma;
