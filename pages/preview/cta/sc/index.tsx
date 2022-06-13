import React from "react";
import { chakra, Box, Stack, Flex, Link } from "@chakra-ui/react";

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
      <Flex justify="center" bg="white" _dark={{ bg: "gray.800" }} w="full">
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{ color: "gray.100" }}
            mb={6}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color="brand.600"
              _dark={{ color: "gray.500" }}
            >
              Start your free trial today.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                _light={{
                  color: "white",
                }}
                bg="brand.600"
                _dark={{ bg: "brand.500" }}
                _hover={{
                  bg: "brand.700",
                  _dark: { bg: "brand.600" },
                }}
              >
                Get started
              </Link>
            </Box>
            <Box ml={3} display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="brand.600"
                bg="white"
                _hover={{
                  bg: "brand.50",
                }}
              >
                Learn more
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Choc;
