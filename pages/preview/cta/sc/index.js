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
      pos="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      bg="gray.600"
      p={20}
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg={useColorModeValue("white", "gray.800")} w="100%">
        <Box
          w={{ base: "100%", md: 3 / 4, lg: 2 / 4 }}
          px={4}
          py={20}
          mx="auto"
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            textShadow="2px 0 currentcolor"
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
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
          >
            <Box display="inline-flex" borderRadius="md" boxShadow="md">
              <chakra.a
                href="#"
                w="100%"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                borderRadius="md"
                color={useColorModeValue("white")}
                bg={useColorModeValue("brand.600", "brand.500")}
                _hover={{
                  bg: useColorModeValue("brand.700", "brand.600"),
                }}
              >
                Get started
              </chakra.a>
            </Box>
            <Box ml={3} display="inline-flex" borderRadius="md" boxShadow="md">
              <chakra.a
                href="#"
                w="100%"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                borderRadius="md"
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
      </Box>
    </Flex>
  );
}
