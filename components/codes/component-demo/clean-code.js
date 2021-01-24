import transformImports from "transform-imports";

const transformConstants = (code) => {
  const format = /const\s\w+\s=\s\((\w+)?\)\s=>\s/;
  return code.replace(format, "function App()");
};
const removeExports = (code) => {
  const formats = [/\s?export\sdefault\s\w+;/g, /\s?export\sdefault\s/g];
  formats.forEach((format) => (code = code.replace(format, "")));
  return code;
};

const removeImports = (code) => {
  return transformImports(code, (importDefs) => {
    importDefs.forEach((importDef) => {
      importDef.remove();
    });
  });
};
export const cleanCode = (code) => {
  return transformConstants(removeExports(removeImports(code)));
};
