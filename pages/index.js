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
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

export default function Home() {
  return (
    <SiteLayout>
      <PageHead title="Chakra UI Prebuilt Components" />
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
                    cursor="pointer"
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
              <Text maxW="560px" mx="auto" opacity={0.7} fontSize="xs" mt="6">
                Proudly developed in{" "}
                <Icon viewBox="0 0 48 48" boxSize={4}>
                  <g>
                    <rect
                      x="16"
                      y="6"
                      fill="#E6E6E6"
                      width="16"
                      height="36"
                    ></rect>{" "}
                    <path
                      fill="#078754"
                      d="M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z"
                    ></path>
                    <path
                      fill="#078754"
                      d="M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z"
                    ></path>
                  </g>
                </Icon> by{" "}
                <Link isExternal href="https://twitter.com">
                  Anuoluwapo Abraham
                </Link>
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </SiteLayout>
  );
}
