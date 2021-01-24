import transformImports from "transform-imports";

const transformConstants = (code, path) => {
  const componentSection = path.split("/")[0];
  const format = /const\s\w+\s=\s\(\)\s=>\s/;
  return code.replace(format, `function Demo${componentSection}()`);
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

export const cleanCode = (code, path) => {
  return transformConstants(removeExports(removeImports(code)), path);
};
