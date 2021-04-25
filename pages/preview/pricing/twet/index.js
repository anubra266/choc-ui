import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";

export default function Pricing() {
  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("green.500")}
          viewBox="0 0 20 20"
          fillRule="currentColor"
          as={IoCheckmark}
        />
        <chakra.p
          fontSize="lg"
          color={useColorModeValue("gray.600", "gray.400")}
          {...props}
        />
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="full" pt={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          mb={{ base: 6, sm: 0 }}
        >
          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg={useColorModeValue("white", "gray.700")}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Hobby
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  $79
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  color={useColorModeValue("gray.400")}
                >
                  /month
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg={useColorModeValue("gray.100", "gray.800")}
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics </Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color={useColorModeValue("brand.600", "gray.100")}
                  bg={useColorModeValue("white", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("brand.50", "gray.700"),
                  }}
                >
                  Start your trial{" "}
                </chakra.a>
              </Box>
            </VStack>
          </Flex>

          <Flex
            flex={{ base: 1, lg: "initial" }}
            w={{ lg: 2.4 / 7 }}
            rounded="lg"
            bg={useColorModeValue("white", "gray.700")}
            mt={{ base: 4, sm: -4 }}
            shadow="xl"
            zIndex={30}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Growth
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  $149
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  color={useColorModeValue("gray.400")}
                >
                  /month
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              h="full"
              roundedBottom="lg"
              spacing={8}
              bg={useColorModeValue("gray.100", "gray.800")}
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics </Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
                <Feature>1,000 Email Address Validations</Feature>
                <Feature>Limited 24/7 Ticket Support</Feature>
              </VStack>
              <Box
                display="inline-flex"
                rounded="md"
                shadow="md"
                w="full"
              >
                <chakra.a
                  
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
                </chakra.a>
              </Box>
            </VStack>
          </Flex>

          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            roundedTop="lg"
            borderBottomRightRadius="lg"
            borderTopLeftRadius={0}
            bg={useColorModeValue("white", "gray.700")}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Scale
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  $349
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  color={useColorModeValue("gray.400")}
                >
                  /month
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg={useColorModeValue("gray.100", "gray.800")}
              borderBottomRightRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics </Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color={useColorModeValue("brand.600", "gray.100")}
                  bg={useColorModeValue("white", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("brand.50", "gray.700"),
                  }}
                >
                  Start your trial
                </chakra.a>
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
