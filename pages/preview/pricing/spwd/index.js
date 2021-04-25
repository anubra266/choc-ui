import React from "react";
import {
  chakra,
  Box,
  Flex,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

export default function Component() {
  return (
    <Flex
      boxSize="full"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        bg={useColorModeValue("white", "gray.800")}
        rounded="md"
        shadow="base"
        w="full"
        h="600px"
      >
        <Box
          px={[2, , 4]}
          pt={20}
          borderWidth="1"
          borderColor={useColorModeValue("gray.100", "gray.700")}
          bg={useColorModeValue("gray.100", "gray.800")}
        >
          <Box w="full" mx="auto">
            <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
              Simple transparent pricing
            </Text>
            <chakra.p
              mb={6}
              fontSize={["lg", , "xl"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              If you're not satisfied, contact us and we'll refund you within
              the first 20 days.
            </chakra.p>
          </Box>
          <Flex
            rounded="md"
            mx={10}
            mt="auto"
            p={15}
            bg="white"
            shadow="lg"
            mb="-50px"
            h="150px" alignSelf="end"
          >
            aaa
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
