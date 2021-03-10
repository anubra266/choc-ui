import { getParameters } from "codesandbox/lib/api/define";
import package_json from "./codesandbox/package.json";
import { index, App } from "./codesandbox/src";
import { html } from "./codesandbox/html";

export const editOnlineCds = (code, path) => {
  const section = path.split("/")[0];
  const json_config = `${{
    ...package_json,
    name: `Choc UI ${section} Codesandbox`,
    description: `Edit Choc UI ${section} Code`,
  }}`;

  const parameters = getParameters({
    files: {
      "public/index.html": {
        content: html(path),
        isBinary: false,
      },
      "src/index.js": {
        content: index,
        isBinary: false,
      },
      "src/App.js": {
        content: App(code),
        isBinary: false,
      },
      "package.json": {
        content: json_config,
        isBinary: false,
      },
    },
  });

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
};
