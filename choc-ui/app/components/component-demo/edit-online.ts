import { getParameters } from "codesandbox/lib/api/define";
import package_json from "./codesandbox/package.json";
import { App, index } from "./codesandbox/src";
import { html } from "./codesandbox/html";

export const editOnlineCds = (code: string, path?: string) => {
  if (!path || !code) return "";
  const section = path.split("/")[0];
  const json_config = {
    ...package_json,
    name: `Choc UI ${section} Codesandbox`,
    description: `Edit Choc UI ${section} Code`,
  };

  const parameters = getParameters({
    files: {
      "public/index.html": {
        content: html(path),
        isBinary: false,
      },
      "src/index.tsx": {
        content: index,
        isBinary: false,
      },
      "src/App.tsx": {
        content: App(code),
        isBinary: false,
      },
      "package.json": {
        content: JSON.stringify(json_config),
        isBinary: false,
      },
    },
  });

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
};
