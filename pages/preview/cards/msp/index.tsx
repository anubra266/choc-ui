import React from "react";
import { chakra, Box, Flex } from "@chakra-ui/react";

const Choc = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Box
          bg="gray.300"
          h={64}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
          }}
        ></Box>

        <Box
          w={{ base: 56, md: 64 }}
          bg="white"
          _dark={{ bg: "gray.800" }}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color="gray.800"
            _dark={{ color: "white" }}
            letterSpacing={1}
          >
            Nike Revolt
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={3}
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          >
            <chakra.span
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: "gray.200" }}
            >
              $129
            </chakra.span>
            <chakra.button
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.700",
                _dark: { bg: "gray.600" },
              }}
              _focus={{
                bg: "gray.700",
                _dark: { bg: "gray.600" },
                outline: "none",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Choc;
