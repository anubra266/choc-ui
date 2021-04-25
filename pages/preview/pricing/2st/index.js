import React from "react";
import {
  Box,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Component() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
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
          bg={useColorModeValue("white", "gray.800")}
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
            color={useColorModeValue("gray.500", "gray.400")}
          >
            For Developers
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color={useColorModeValue("gray.900", "gray.50")}
            lineHeight="tight"
          >
            $9
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {" "}
              per month
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color={useColorModeValue("gray.600", "gray.500")}
            class="mb-6 text-lg text-gray-600"
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
              color={useColorModeValue("white")}
              bg={useColorModeValue("brand.600", "brand.500")}
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
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
          bg={useColorModeValue("white", "gray.800")}
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
            color={useColorModeValue("gray.500", "gray.400")}
          >
            For Designers
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color={useColorModeValue("gray.900", "gray.50")}
            lineHeight="tight"
          >
            $19
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {" "}
              per month
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color={useColorModeValue("gray.600", "gray.500")}
            class="mb-6 text-lg text-gray-600"
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
              color={useColorModeValue("white")}
              bg={useColorModeValue("brand.600", "brand.500")}
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
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
}
