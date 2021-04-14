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

const KuttyHero = () => {
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
                  color={useColorModeValue("gray.800", "white")}
                  _hover={{
                    color: useColorModeValue("gray.700", "gray.300"),
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
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
              >
                Web developers
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
              >
                Web Designers
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
              >
                UI/UX Designers
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
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
              class="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Start project
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

export default KuttyHero;
