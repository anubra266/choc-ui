import React from "react";
import { chakra, Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";

const Ma = () => {
  return (
    <Box
      pos="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      bg="gray.600"
      p={50}
      width="3xl"
    >
      <Box
        mx="auto"
        borderRadius="lg"
        boxShadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Image
          borderTopRadius="lg"
          w="100%"
          h={64}
          objectFit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Product
            </chakra.span>
            <chakra.a
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              href="#"
            >
              I Built A Successful Blog In One Year
            </chakra.a>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  objectFit="cover"
                  borderRadius="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <chakra.a
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                  href="#"
                >
                  Jone Doe
                </chakra.a>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ma;
