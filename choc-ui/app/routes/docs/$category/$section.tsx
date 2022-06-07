import { Text, chakra } from "@chakra-ui/react";
import type { Dict } from "@chakra-ui/utils";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AdBox } from "~/components/adbox";
import { ComponentDemo } from "~/components/component-demo";
import { getSectionContent } from "~/utils/section-content.server";
import { toCapitalCase } from "~/utils/string";

export const meta: MetaFunction = ({ location }) => {
  const routePaths = location.pathname.split("/").slice(-1);
  const [section] = routePaths;
  const title = `${toCapitalCase(section)} | Choc UI`;

  return {
    charset: "utf-8",
    title,
    "og-title": title,
    "twitter-title": title,
    viewport: "width=device-width,initial-scale=1",
  };
};

export const loader: LoaderFunction = ({ params }) => {
  const sectionObj = getSectionContent(params);
  return sectionObj;
};

export const Section = () => {
  const sectionObj = useLoaderData<Dict>();

  return (
    <div>
      <Text fontSize="2xl" mb={2} textTransform="capitalize" fontWeight="700">
        {sectionObj?.title}
      </Text>
      <AdBox />
      {sectionObj?.components.map((comp: Dict) => (
        <chakra.div key={comp.preview} id={comp.preview} mt={8} rounded="lg">
          <ComponentDemo comp={comp} />
        </chakra.div>
      ))}
    </div>
  );
};

export default Section;
