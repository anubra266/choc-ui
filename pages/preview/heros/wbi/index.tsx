import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Choc = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>
      <chakra.nav bg={bg} shadow="base">
        <Box mx="auto" px={6} py={3} maxW="full">
          <Box
            display={{ md: "flex" }}
            alignItems={{ md: "center" }}
            justifyContent={{ md: "space-between" }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box fontSize="xl" fontWeight="semibold" color="gray.700">
                <chakra.a
                  fontSize={["xl", , "2xl"]}
                  fontWeight="bold"
                  color="gray.800"
                  _dark={{ color: "white" }}
                  _hover={{
                    color: "gray.700",
                    _dark: { color: "gray.300" },
                  }}
                >
                  Brand
                </chakra.a>
              </Box>

              <Flex display={{ md: "none" }}>
                <IconButton
                  aria-label="toggle menu"
                  icon={<AiOutlineMenu />}
                  variant="ghost"
                />
              </Flex>
            </Flex>

            <Box display={["none", , "flex"]} alignItems={{ md: "center" }}>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color="gray.700"
                _dark={{ color: "gray.200" }}
                textTransform="capitalize"
                _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
              >
                Web developers
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color="gray.700"
                _dark={{ color: "gray.200" }}
                textTransform="capitalize"
                _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
              >
                Web Designers
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color="gray.700"
                _dark={{ color: "gray.200" }}
                textTransform="capitalize"
                _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
              >
                UI/UX Designers
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color="gray.700"
                _dark={{ color: "gray.200" }}
                textTransform="capitalize"
                _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
              >
                Contact
              </chakra.a>
            </Box>
          </Box>
        </Box>
      </chakra.nav>

      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", , "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              Build Your new{" "}
              <chakra.span color="blue.400" textDecor="underline">
                Saas
              </chakra.span>
            </Heading>
            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
            >
              Start project
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

export default Choc;
