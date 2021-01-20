import React from "react";
import {
  chakra,
  Box,
  Container,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const Ma = () => {
  const activeStyle = {
    bg: useColorModeValue("brand.600", "brand.500"),
    color: useColorModeValue("white", "gray.200"),
  };
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
      <Flex>
        <chakra.a
          href="#"
          mx={1}
          px={3}
          py={2}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.500", "gray.600")}
          borderRadius="md"
          cursor="not-allowed"
        >
          previous
        </chakra.a>

        <chakra.a
          href="#"
          mx={1}
          px={3}
          py={2}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.700", "gray.200")}
          {...activeStyle}
          borderRadius="md"
        >
          1
        </chakra.a>

        <chakra.a
          href="#"
          mx={1}
          px={3}
          py={2}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.700", "gray.200")}
          _hover={activeStyle}
          borderRadius="md"
        >
          2
        </chakra.a>
        <chakra.a
          href="#"
          mx={1}
          px={3}
          py={2}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.700", "gray.200")}
          _hover={activeStyle}
          borderRadius="md"
        >
          3
        </chakra.a>
        <chakra.a
          href="#"
          mx={1}
          px={3}
          py={2}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.700", "gray.200")}
          _hover={activeStyle}
          borderRadius="md"
        >
          Next
        </chakra.a>
      </Flex>
    </Container>
  );
};

export default Ma;
