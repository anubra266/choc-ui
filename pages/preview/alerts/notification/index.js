import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Avatar,
  Link,
} from "@chakra-ui/react";

const Ma = () => {
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      {" "}
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
              <Link
                color={useColorModeValue("blue.500", "blue.300")}
                _hover={{ color: "blue.400", textDecor: "underline" }}
              >
                uploaded image
              </Link>
              .
            </chakra.p>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Ma;
