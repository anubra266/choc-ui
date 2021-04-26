import React, { useState } from "react";
import {
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Component() {
  const [frequency, setFrequency] = useState("month");
  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color={useColorModeValue("gray.700", "gray.400")}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      w="full"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Box py="64px" px="10" bg={useColorModeValue("gray.100", "gray.700")}>
        <Box w="full" px={[10, , 4]} mx="auto" textAlign="center">
          <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
            Plans & Pricing
          </Text>
          <chakra.p
            mb={6}
            fontSize={["lg", , "xl"]}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            5 minute installation · Try Team plan features for 14 days · No
            credit card required
          </chakra.p>
          <Flex justify="center" mx={["auto", 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              p="2"
              textAlign="center"
              rounded="md"
              bg={useColorModeValue("gray.200", "gray.600")}
            >
              <Button
                colorScheme="brand"
                variant={frequency === "month" ? "solid" : "ghost"}
                onClick={() => setFrequency("month")}
                px={6}
              >
                Bill Monthly
              </Button>
              <Button
                colorScheme="brand"
                variant={frequency === "year" ? "solid" : "ghost"}
                onClick={() => setFrequency("year")}
                px={6}
              >
                Bill Yearly
              </Button>
            </Stack>
          </Flex>
        </Box>
        <Box maxW="7xl" py="20" mx="auto">
          <SimpleGrid columns={[1, , , 3]} gap={[16, 8]}>
            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg={useColorModeValue("white", "gray.800")}
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <chakra.p
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  Free
                </chakra.p>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 0 : 0}
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {" "}
                    /{frequency}
                  </chakra.span>
                </Text>
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
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics</Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg={useColorModeValue("white", "gray.800")}
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <chakra.p
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  Team
                </chakra.p>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 9 : 89}
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {" "}
                    /{frequency}
                  </chakra.span>
                </Text>
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
                  color={useColorModeValue("gray.800")}
                  bg={useColorModeValue("gray.50", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                >
                  Try for free
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics</Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
                <Feature>5 Days of Log Retention</Feature>
                <Feature>Limited 24/7 Ticket Support</Feature>
                <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                <Feature>1,000 Email Address Validations</Feature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg={useColorModeValue("white", "gray.800")}
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <chakra.p
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  Company
                </chakra.p>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 21 : 189}
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {" "}
                    /{frequency}
                  </chakra.span>
                </Text>
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
                  color={useColorModeValue("gray.800")}
                  bg={useColorModeValue("gray.50", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                >
                  Try for free
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics</Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
                <Feature>5 Days of Log Retention</Feature>
                <Feature>Limited 24/7 Ticket Support</Feature>
                <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                <Feature>1,000 Email Address Validations</Feature>
                <Feature>Instant Chat Support</Feature>
                <Feature>Custom Features</Feature>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
}
