import React from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import { ComponentDemo } from "components/component-demo";

export const ComponentSample = () => {
  const card = randomCard();
  return (
    <Box
      as="section"
      mt={{ base: "6rem", md: "10rem" }}
      pt={{ base: "6rem", md: "10rem" }}
      pb={{ base: "0", md: "0rem" }}
      my={12}
    >
      <Box>
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h1
              maxW="800px"
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
              Faster design and delivery.
            </chakra.h1>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Spend less time building blocks and more time building a great
              experience for your customers.
            </chakra.p>
            <chakra.div
              mt="10"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              <ComponentDemo comp={card} shadow="lg" />
            </chakra.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const randomCard = () => {
  const { elements } = require("categories/elements.json");
  const { components } = elements.sections.cards;
  return components[Math.floor(Math.random() * components.length)];
};
