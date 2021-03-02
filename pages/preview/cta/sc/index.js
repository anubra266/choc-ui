import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Sj() {
  return (
    <Flex
      bg="gray.600"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg={useColorModeValue("white", "gray.800")} w="full">
        <Box
          w={{ base: "full", md: 3 / 4, lg: 2 / 4 }}
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
            fontFamily="fantasy"
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
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                href="#"
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color={useColorModeValue("white")}
                bg={useColorModeValue("brand.600", "brand.500")}
                _hover={{
                  bg: useColorModeValue("brand.700", "brand.600"),
                }}
              >
                Get started
              </Link>
            </Box>
            <Box ml={3} display="inline-flex" rounded="md" shadow="md">
              <Link
                href="#"
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
      </Box>
    </Flex>
  );
}
