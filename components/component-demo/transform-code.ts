import { registerPlugin, transform } from "@babel/standalone";
import type { Visitor } from "@babel/traverse";
import type { Dict } from "@chakra-ui/utils";
const prettier = require("prettier/standalone");

export function transformCode(code?: string) {
  if (!code) return "<b>Code not found for this component </b>";
  function chocCode(): Dict<Visitor> {
    return {
      visitor: {
        ImportDeclaration(path) {
          path.remove();
        },
        ExportDeclaration(path) {
          path.remove();
        },
      },
    };
  }

  try {
    registerPlugin("chocCode", chocCode);
  } catch (error) {
    console.error("error", error);
  }

  var output = transform(code, {
    plugins: ["chocCode"],
    presets: [["typescript", { allExtensions: true, isTSX: true }]],
  });

  let newCode: string = output.code;

  newCode = newCode.substring(newCode.indexOf("=") + 1);

  if (!newCode) return "";

  const codeAfterBrace = newCode.trimStart().split("{")[1];
  const charactersAfterBrace = codeAfterBrace.substring(
    codeAfterBrace.search(/\S/)
  );

  const onlyReturn = charactersAfterBrace.startsWith("return");

  newCode = onlyReturn
    ? newCode.substring(newCode.indexOf("<") - 1, newCode.lastIndexOf(">") + 1)
    : newCode;

  newCode = prettier.format(newCode, {
    parser: "babel",
    plugins: [require("prettier/parser-babel")],
  });

  return newCode;
}
