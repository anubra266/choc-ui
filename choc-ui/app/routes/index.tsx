import { useLoaderData } from "@remix-run/react";
import type { Dict } from "@zag-js/core/dist/types";
import * as fs from "fs";

import Credits from "~/components/docs/credits";
import { SplitbeeBadge } from "~/components/docs/splitbee-badge";
import { LandingHero } from "~/components/landing/hero";
import Navbar from "~/components/navbar";
import type { LoaderFunction } from "@remix-run/node";
import { Sponsors } from "~/components/landing/sponsors";
import OpenSource from "~/components/landing/open-source";

export type LoaderData = {
  sponsors: Dict[];
  contributors: Dict[];
};

export const loader: LoaderFunction = (): LoaderData => {
  // Get contributors from .all-contributorsrc
  const { contributors } = JSON.parse(
    fs.readFileSync(".all-contributorsrc", "utf-8")
  );
  const sponsors = require("sponsors.json");
  return {
    contributors,
    sponsors,
  };
};

export default function Index() {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <>
      <Navbar />
      <LandingHero />
      <OpenSource contributors={loaderData.contributors} />
      <Sponsors sponsors={loaderData.sponsors} />
      <SplitbeeBadge />
      <Credits />
    </>
  );
}
