import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  useToken,
  Stack,
  SimpleGrid,
  Icon,
  Link,
  Badge,
} from "@chakra-ui/react";

const Choc = () => {
  const topBg = useColorModeValue("gray.800", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const [bottomBgHex] = useToken("colors", [bottomBg]);
  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{ color: "brand.300" }}
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
          <chakra.span mt={2} color="gray.700" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{ bg: "gray.600" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
        bg={bottomBg}
      >
        <Box pt={20} rounded="md" bg={topBg}>
          <Box w="full" px={[10, , 4]} mx="auto">
            <chakra.p
              fontSize={["lg", , "xl"]}
              color="gray.300"
              textTransform="uppercase"
              fontWeight="semibold"
            >
              Pricing
            </chakra.p>
            <Text
              mb={2}
              fontSize={["2xl", , "5xl"]}
              fontWeight="bold"
              lineHeight="tight"
              color="white"
            >
              The right price for you, whoever you are
            </Text>
            <chakra.p mb={6} fontSize={["lg", , "xl"]} color="gray.400">
              Our plans scale for any organization—from startups to Fortune
              500s.
            </chakra.p>
          </Box>
          <Box
            bg={`linear-gradient(180deg, transparent 70%, ${bottomBgHex} 30%)`}
          >
            <SimpleGrid
              columns={[1, , , 2]}
              gap="24px"
              rounded="md"
              mx={[10, , 24]}
              textAlign="left"
            >
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Standard
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      $52
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        {" "}
                        /mo{" "}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      One plan for any organization—from startups to Fortune
                      500s. We offer 50% off of for all students and
                      universities. Please get in touch with us and provide
                      proof of your status.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>Granular access controls</Feature>
                      <Feature>Custom components</Feature>
                      <Feature>Deploy on-premises</Feature>
                      <Feature>Identity management</Feature>
                    </Stack>
                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                    >
                      Get started
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Enterprise
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      $82
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        {" "}
                        /mo{" "}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      One plan for any organization—from startups to Fortune
                      500s. We offer 50% off of for all students and
                      universities. Please get in touch with us and provide
                      proof of your status.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>Granular access controls</Feature>
                      <Feature>Custom components</Feature>
                      <Feature>Deploy on-premises</Feature>
                      <Feature>Identity management</Feature>
                    </Stack>
                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                    >
                      Get started
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </SimpleGrid>
            <Flex
              mb="100px"
              mx={[10, , 24]}
              p={10}
              mt={5}
              rounded="md"
              bg="#F9FAFB"
              _dark={{ bg: "gray.700" }}
              align="center"
              direction={["column", , "row"]}
            >
              <Stack flex="0.8" pr={10}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme="gray"
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                  w="fit-content"
                >
                  Discounted
                </Badge>
                <Text textAlign="left">
                  We offer <chakra.span fontWeight="bold">50%</chakra.span> off
                  of for all students and universities. Please get in touch with
                  us and provide proof of your status.
                </Text>
              </Stack>
              <Link
                w={["full", , "auto"]}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                mt={[5, , 0]}
                border="solid transparent"
                fontWeight="semibold"
                rounded="md"
                shadow="md"
                h="fit-content"
                color="brand.600"
                _dark={{ color: "white" }}
                bg="white"
                _hover={{
                  bg: "brand.50",
                  _dark: { bg: "gray.900" },
                }}
                flex="0.2"
              >
                Get Discount
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Choc;
