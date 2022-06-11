import React from "react";
import {
  Box,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

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
      <SimpleGrid
        columns={[1, , 2]}
        gap="24px"
        mx="auto"
        textAlign={["left", , "center"]}
      >
        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
        >
          <chakra.p
            mb={1}
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            For Developers
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            _dark={{ color: "gray.50" }}
            lineHeight="tight"
          >
            $9
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {" "}
              per month
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color="gray.600"
            _dark={{ color: "gray.500" }}
          >
            One plan for any organization—from startups to Fortune 500s. We
            offer 50% off of for all students and universities. Please get in
            touch with us and provide proof of your status.
          </chakra.p>
          <Stack
            display={["block", , "flex"]}
            spacing={2}
            justifyContent="center"
            direction={["column", , "row"]}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="brand.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Get started
            </Link>
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Contact Us
            </Link>
          </Stack>
        </Box>

        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
        >
          <chakra.p
            mb={1}
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            For Designers
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            _dark={{ color: "gray.50" }}
            lineHeight="tight"
          >
            $19
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {" "}
              per month
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color="gray.600"
            _dark={{ color: "gray.500" }}
          >
            One plan for any organization—from startups to Fortune 500s. We
            offer 50% off of for all students and universities. Please get in
            touch with us and provide proof of your status.
          </chakra.p>
          <Stack
            display={["block", , "flex"]}
            spacing={2}
            justifyContent="center"
            direction={["column", , "row"]}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="brand.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Get started
            </Link>
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Contact Us
            </Link>
          </Stack>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default Choc;
