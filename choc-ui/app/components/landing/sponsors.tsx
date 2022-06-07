import {
  Box,
  Icon,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import type { Dict } from "@zag-js/core/dist/types";
import { FiExternalLink } from "react-icons/fi";
import { CONSTANTS } from "~/utils/constants";
import { SponsorPack } from "./sponsor-pack";

export const Sponsors = ({ sponsors }: { sponsors: Dict[] }) => {
  return (
    <Box
      px={6}
      py={{ base: "6", lg: 24 }}
      mx="auto"
      textAlign="center"
      maxW="7xl"
    >
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
              href={CONSTANTS.SPONSOR_LINK}
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
              _light={{
                color: "white",
              }}
              bg="brand.600"
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
              }}
              _dark={{
                bg: "brand.500",
              }}
            >
              Support Choc UI
              <Icon as={FiExternalLink} ml={2} />
            </Link>
          </Box>
        </div>
      </VStack>

      <Box mx="auto" maxW={{ xl: "2xl" }} className="xl:max-w-2xl mx-auto">
        <SponsorPack sponsors={sponsors} />
      </Box>
    </Box>
  );
};
