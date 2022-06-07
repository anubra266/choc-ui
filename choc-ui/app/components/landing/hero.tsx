import {
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { FaGithub } from "react-icons/fa";
import { CONSTANTS } from "~/utils/constants";

export const LandingHero = () => {
  return (
    <Stack
      px={8}
      py={24}
      mx="auto"
      w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
      spacing={{ base: "4", lg: "8" }}
    >
      <Heading
        mb={6}
        fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        Prebuilt{" "}
        <Text
          display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, green.400,purple.500)"
          fontWeight="extrabold"
        >
          Chakra UI Components
        </Text>{" "}
        for faster development
      </Heading>

      <chakra.p
        mb={6}
        fontSize={{ base: "lg", md: "xl" }}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
        maxW="container.md"
      >
        Choc UI is a set of accessible and reusable components that are commonly
        used in web applications. Provides premade responsive and color mode
        felxible components to help you build faster than ever.
      </chakra.p>

      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        mb={{ base: 4, md: 8 }}
        gap={4}
        sx={{
          "[data-cta]": {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            w: { base: "full", sm: "auto", lg: "205px" },
            h: { lg: "64px" },
            mb: { base: 2, sm: 0 },
            fontSize: { lg: "xl" },
            cursor: "pointer",
          },
        }}
      >
        <Button
          as={Link}
          to="/docs/elements/alerts"
          variant="solid"
          colorScheme="brand"
          size="lg"
          data-cta
        >
          Get Started
        </Button>
        <Button
          as="a"
          colorScheme="gray"
          size="lg"
          target="_blank"
          href={CONSTANTS.CHOC_GITHUB}
          data-cta
        >
          Github
          <Icon boxSize={4} ml={2} as={FaGithub} />
        </Button>
      </Flex>
    </Stack>
  );
};
