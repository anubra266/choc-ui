import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

const Feature = (props) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          borderRadius="md"
          bg={useColorModeValue("brand.500")}
          color="white"
        >
          <Icon
            boxSize={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {props.children}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.description}
        </chakra.dd>
      </Box>
    </Flex>
  );
};
const Ma = () => {
  return (
    <Flex
      bg="gray.600"
      p={20}
      width="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={12}
        bg={useColorModeValue("white", "gray.800")}
        borderRadius="xl"
      >
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Transactions
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900")}
            >
              A better way to send money
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <SimpleGrid
              spacingX={{ base: 10, md: 0 }}
              columns={{ md: 2 }}
              rowGap={{ md: 8 }}
              columnGap={{ md: 10 }}
              class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
            >
              <Feature
                title="Competitive exchange rates"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione."
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </Feature>

              <Feature
                title=" No hidden fees"
                description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione."
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </Feature>

              <Feature
                title="Transfers are instant"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione."
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </Feature>

              <Feature
                title="Mobile notifications"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione."
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </Feature>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Ma;
