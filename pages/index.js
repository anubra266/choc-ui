import path from "path";
import * as fs from "fs";
import PageHead from "~/components/head";
import SiteLayout from "~/components/layouts/site";
import Credits from "~/components/credits";
import {
  Box,
  Text,
  Button,
  chakra,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";
import Feature1 from "~/components/landing/feature1";
import Feature2 from "~/components/landing/feature2";
import OpenSource from "~/components/landing/open-source";

export default function Home(props) {
  return (
    <SiteLayout>
      <PageHead title="Chakra UI Prebuilt Components" />
      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: "6rem", md: "10rem" }}
          pb={{ base: "0", md: "0rem" }}
          px={{ base: "2rem", sm: "5rem" }}
        >
          <Box>
            <Box textAlign={{ lg: "center" }}>
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
                <Link href={process.env.githubUrl} target="_blank">
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    size="lg"
                    colorScheme="gray"
                    leftIcon={<DiGithubBadge fontSize="1.5em" />}
                    cursor="pointer"
                  >
                    GitHub
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Feature1 />
        <Feature2 />
        <OpenSource contributors={props.contributors} />
        <Credits />
      </Box>
    </SiteLayout>
  );
}
export async function getStaticProps() {
  // Get contributors from .all-contributorsrc
  const contributorsRaw = path.resolve(".all-contributorsrc");
  const { contributors } = JSON.parse(
    fs.readFileSync(contributorsRaw, "utf-8")
  );
  return {
    props: { contributors },
  };
}
