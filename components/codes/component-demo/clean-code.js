import transformImports from "transform-imports";

const transformCamelCase = (name) => {
  return name.replace(name.charAt(0), name.charAt(0).toUpperCase());
};
export const transformConstants = (code, path) => {
  const componentSection = path.split("/")[0];
  const functionName = transformCamelCase(componentSection);
  const format = /const\s\w+\s=\s\(\)\s=>\s/;
  return code.replace(format, `function ${functionName}()`);
};
export const removeExports = (code) => {
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
