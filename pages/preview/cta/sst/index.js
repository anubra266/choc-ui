import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Sj() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bgGradient="linear(to-r, white, purple.300)"
        bg={useColorModeValue(null, "gray.800")}
      >
        <SimpleGrid
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          alignItems="center"
          columns={{ base: 1, lg: 2, xl: 3 }}
          spacing={4}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color={useColorModeValue("gray.900", "gray.100")}
              mb={6}
            >
              <chakra.span display="block">Ready to dive in?</chakra.span>
              <chakra.span
                display="block"
                color={useColorModeValue("brand.600", "gray.500")}
              >
                Start your free trial today.
              </chakra.span>
            </chakra.h2>
            <Stack direction={{ base: "column", sm: "row" }} spacing={2}>
              <Box display="inline-flex" rounded="md" shadow="md">
                <chakra.a
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  w="full"
                  rounded="md"
                  color={useColorModeValue("white")}
                  bg={useColorModeValue("brand.600", "brand.500")}
                  _hover={{
                    bg: useColorModeValue("brand.700", "brand.600"),
                  }}
                >
                  Get started
                </chakra.a>
              </Box>
              <Box ml={3} display="inline-flex" rounded="md" shadow="md">
                <chakra.a
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
                </chakra.a>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
