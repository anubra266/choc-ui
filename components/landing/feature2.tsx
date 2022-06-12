import React from "react";
import {
  Box,
  chakra,
  useColorModeValue,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaEdit, FaSun, FaMobileAlt } from "react-icons/fa";

const Feature = (props: { title: string; children: any; icon: any }) => {
  return (
    <Box
      bg="blackAlpha.50"
      _dark={{
        bg: "blackAlpha.200",
      }}
      p={8}
      rounded="lg"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize={12}
        mb={4}
        rounded="full"
        color={useColorModeValue("brand.600", "brand.100")}
        bg={useColorModeValue("brand.100", "brand.600")}
      >
        <Icon
          boxSize={5}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          as={props.icon}
        />
      </Flex>
      <chakra.span
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
        color={useColorModeValue("gray.900", "inherit")}
        fontSize="xl"
      >
        {props.title}
      </chakra.span>
      <chakra.p fontSize="xl" color={useColorModeValue("gray.500", "gray.400")}>
        {props.children}
      </chakra.p>
    </Box>
  );
};
const Features = () => {
  return (
    <Box as="section" mt="6rem" pt={{ base: "6rem", md: "10rem" }} my={12}>
      <Box>
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h1
              maxW="900px"
              mx="auto"
              fontSize={{
                base: "2rem",
                sm: "3rem",
                lg: "4rem",
              }}
              fontFamily="heading"
              letterSpacing="tight"
              fontWeight="bold"
              mb="16px"
              lineHeight="1.2"
            >
              An experience you'd expect from a component library
            </chakra.h1>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Opinionated and designed for daily use.
            </chakra.p>{" "}
          </Box>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacingX={{ base: 16, lg: 10 }}
            spacingY={20}
            mt={12}
            mx="2rem"
          >
            <Feature title="Live Editor" icon={FaEdit}>
              Live code editor, so you can play around with code, before
              extracting into your work.
            </Feature>

            <Feature title="Light and Dark UI" icon={FaSun}>
              Optimized for multiple color modes. Use light or dark, your
              choice.
            </Feature>
            <Feature title="Fully Responsive" icon={FaMobileAlt}>
              From the smallest to the largest, our Components are comfortable
              on any screen.
            </Feature>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
