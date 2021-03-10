type modeProps = [prop: string, light: string, dark: string]
export const mode = (...[prop, light, dark]: modeProps) => {
  return {
    [prop]: light,
    ".chakra-ui-dark &": {
      [prop]: dark,
    },
  }
}
