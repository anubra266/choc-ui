import React from "react";
import { Avatar, Box, Flex, Link, chakra } from "@chakra-ui/react";

const Choc = () => {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      {" "}
      <Flex
        maxW="sm"
        w="full"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex w={2} bg="gray.800" _dark={{ bg: "gray.900" }}></Flex>

        <Flex alignItems="center" px={2} py={3}>
          <Avatar
            boxSize={10}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Box mx={3}>
            <chakra.p color="gray.600" _dark={{ color: "gray.200" }}>
              Dan has replied on the{" "}
              <Link
                color="blue.500"
                _dark={{ color: "blue.300" }}
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

export default Choc;
