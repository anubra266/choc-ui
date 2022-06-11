import React from "react";
import { chakra, Box, Flex, Button, HStack } from "@chakra-ui/react";

const Choc = () => {
  return (
    <Flex px={4} py={32} mx="auto">
      <Box mx="auto" w={{ lg: 8 / 12, xl: 5 / 12 }}>
        <chakra.p
          mb={2}
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wide"
          color="gray.400"
          textTransform="uppercase"
        >
          For Developers
        </chakra.p>
        <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color="gray.900"
          _dark={{ color: "white" }}
        >
          Focus on your apps
        </chakra.h1>
        <chakra.p mb={5} color="gray.500" fontSize={{ md: "lg" }}>
          Today every company needs apps to engage their customers and run their
          businesses. Step up your ability to build, manage, and deploy great
          apps at scale with us.
        </chakra.p>
        <HStack>
          <Button
            as="a"
            w={{ base: "full", sm: "auto" }}
            variant="solid"
            colorScheme="brand"
            size="lg"
            mb={{ base: 2, sm: 0 }}
            cursor="pointer"
          >
            Sign up for free
          </Button>
          <Button
            as="a"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Read our blog
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Choc;
