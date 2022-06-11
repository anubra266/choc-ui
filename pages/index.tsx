import { NextPage } from "next";
import path from "path";
import * as fs from "fs";
import PageHead from "components/head";
import SiteLayout from "components/layouts/site";
import Credits from "components/credits";
import { Box } from "@chakra-ui/react";
import Feature2 from "components/landing/feature2";
import OpenSource from "components/landing/open-source";
import Sponsors from "components/landing/sponsors";
import { Splitbee } from "components/splitbee";
import { LandingHero } from "components/landing/landing-hero";

const Home: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="Chakra UI Prebuilt Components" />
      <Box mb={20}>
        <LandingHero />

        <Feature2 />
        <OpenSource contributors={props.contributors} />
        <Sponsors sponsors={props.sponsors} />
        <Splitbee />
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
