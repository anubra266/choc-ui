import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Box, Link, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { SponsorPack } from "./sponsor-pack";

const Sponsors = ({ sponsors }) => {
  return (
    <Box px={6} mx="auto" textAlign="center" maxW="7xl">
      <VStack spacing={{ base: 7, xl: 10 }}>
        <Text
          pos="relative"
          fontSize={{ base: "3xl", xl: "5xl" }}
          fontWeight="semibold"
        >
          Our Sponsors
        </Text>
        <Text fontSize={{ lg: "lg", xl: "xl" }} maxW="560px" opacity={0.7}>
          Your financial contributions help ensure Choc UI continues to be
          developed and maintained! Sponsor Choc UI with any price of your
          choice.
        </Text>
        <div>
          <Box display="inline-flex" rounded="md" shadow="md">
            <Link
              isExternal
              href={process.env.sponsorLink}
              mt={2}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("white", "inherit")}
              bg={useColorModeValue("brand.600", "brand.500")}
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
              }}
            >
              Support Choc UI
              <Icon as={FiExternalLink} ml={2} />
            </Link>
          </Box>
        </div>
      </VStack>

      <Box mx="auto" maxW={{ xl: "2xl" }}>
        <SponsorPack sponsors={sponsors} />
      </Box>
    </Box>
  );
};

export default Sponsors;
