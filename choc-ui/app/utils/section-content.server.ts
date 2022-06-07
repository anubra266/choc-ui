import type { Dict } from "@chakra-ui/utils";
import type { Params } from "react-router";
import { transformCode } from "~/components/component-demo/transform-code";
import { componentsObj } from "~/utils/route-categories/parse-categories";
var fs = require("fs");

export const getSectionContent = (params: Params<string>) => {
  const { category, section } = params;

  const componentCategory =
    componentsObj[category as keyof typeof componentsObj];
  const componentObj = componentCategory.sections[
    section as keyof typeof componentCategory.sections
  ] as Dict;

  const sectionComponents = componentObj.components.map((comp: Dict) => {
    const [section, component] = comp.preview.split("/");
    const rawCode = getCodeContent(
      `./app/routes/preview/${section}/${component}/index.tsx`
    );
    return {
      ...comp,
      code: transformCode(rawCode),
      rawCode,
    };
  });

  const sectionObj = {
    ...componentObj,
    components: sectionComponents,
  };

  return sectionObj;
};

export const getComponentCode = (url: string) => {
  const urlArr = url.split("/");
  const [section, component] = urlArr.slice(-2);
  const rawCode = getCodeContent(
    `./app/routes/preview/${section}/${component}/index.tsx`
  );
  return rawCode;
};

function getCodeContent(uri: string) {
  try {
    return fs.readFileSync(uri, "utf8");
  } catch (error) {
    console.error(error);
  }
}
