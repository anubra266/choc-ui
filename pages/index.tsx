import { NextPage } from "next";
import path from "path";
import * as fs from "fs";
import PageHead from "components/head";
import SiteLayout from "components/layouts/site";
import Credits from "components/credits";
import {
  Box,
  Text,
  Button,
  chakra,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import NextLink from "next/link";
import Feature1 from "components/landing/feature1";
import Feature2 from "components/landing/feature2";
import OpenSource from "components/landing/open-source";
import Sponsors from "components/landing/sponsors";

const Home: NextPage = (props: any) => {
  const splitbeeBadge = useColorModeValue("-dark", "");
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
                  bgGradient="linear(to-r, brand.400, brand.600)"
                  bgClip="text"
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
                <NextLink href="/docs/installation" passHref>
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    as="a"
                    size="lg"
                    colorScheme="brand"
                    rightIcon={<FaArrowRight fontSize="0.8em" />}
                    cursor="pointer"
                    w={["full", , "auto"]}
                  >
                    Get Started
                  </Button>
                </NextLink>
                <Link href={process.env.githubUrl} isExternal>
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    size="lg"
                    colorScheme="gray"
                    leftIcon={<DiGithubBadge fontSize="1.5em" />}
                    cursor="pointer"
                    w={["full", , "auto"]}
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
        <Sponsors sponsors={props.sponsors} />
        <chakra.a
          display="flex"
          justifyContent="center"
          href="https://splitbee.io/?ref=badge"
        >
          <img
            src={`https://splitbee-cdn.fra1.cdn.digitaloceanspaces.com/static/badge/splitbee-badge${splitbeeBadge}.svg`}
            alt="Analytics by Splitbee.io"
          />
        </chakra.a>
        <Credits />
      </Box>
    </SiteLayout>
  );
};

export async function getStaticProps() {
  // Get contributors from .all-contributorsrc
  const contributorsRaw = path.resolve(".all-contributorsrc");
  const { contributors } = JSON.parse(
    fs.readFileSync(contributorsRaw, "utf-8")
  );
  const sponsors = require("sponsors.json");
  return {
    props: { contributors, sponsors },
  };
}
export default Home;
