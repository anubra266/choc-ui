import PageHead from "~/components/head";
import SiteLayout from "~/components/layouts/site";
import {
  Box,
  Text,
  Button,
  chakra,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";

export default function Home() {
  return (
    <SiteLayout>
      <PageHead title="Chackra UI Prebuilt Components" />
      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: "6rem", md: "6rem" }}
          pb={{ base: "0", md: "0rem" }}
        >
          <Container>
            <Box textAlign="center">
              <chakra.h1
                maxW="680px"
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
                Prebuilt
                <Box
                  as="span"
                  color={useColorModeValue("brand.500", "brand.300")}
                >
                  {" "}
                  Chakra UI{" "}
                </Box>
                Components
              </chakra.h1>

              <Text
                maxW="560px"
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                Choc UI is a set of accessible and reusable components that are
                commonly used in web applications.
              </Text>

              <Stack
                mt="10"
                spacing="4"
                justify="center"
                direction={{ base: "column", sm: "row" }}
              >
                <Link href="docs/installation">
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    as="a"
                    size="lg"
                    colorScheme="brand"
                    rightIcon={<FaArrowRight fontSize="0.8em" />}
                  >
                    Get Started
                  </Button>
                </Link>
                <Button
                  as="a"
                  size="lg"
                  h="4rem"
                  px="40px"
                  fontSize="1.2rem"
                  href="https://github.com/anubra266/choc-ui"
                  target="__blank"
                  leftIcon={<DiGithubBadge size="1.5em" />}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </SiteLayout>
  );
}
