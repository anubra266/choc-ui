import React from "react";
import { ThemeContext } from "~/theme/theme-context";
import { Image, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  const logoColor = useColorModeValue("dark", "light");
  return (
    <ThemeContext.Consumer>
      {({ brand }) => (
        <Image
          alt="logo"
          src={`/logo${brand === "default" ? "" : `-${logoColor}`}.png`}
          style={{ height: "30px", float: "left" }}
          mr={2}
          loading="lazy"
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default Logo;
