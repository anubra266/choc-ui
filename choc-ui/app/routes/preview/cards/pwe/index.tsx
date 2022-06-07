import React from "react";
import { Box, Flex, HStack, chakra } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

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
        maxW="md"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          }}
        ></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            Backpack
          </chakra.h1>

          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </chakra.p>

          <HStack spacing={1} display="flex" alignItems="center" mt={2}>
            <StarIcon color="gray.700" _dark={{ color: "gray.300" }} />
            <StarIcon color="gray.700" _dark={{ color: "gray.300" }} />
            <StarIcon color="gray.700" _dark={{ color: "gray.300" }} />
            <StarIcon color="gray.500" />
            <StarIcon color="gray.500" />
          </HStack>

          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              $220
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
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
