import React from "react";
import {
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <IconButton
      size="md"
      p={4}
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      colorScheme="brand"
      ml={{ base: "0", md: "3" }}
      onClick={toggleMode}
      icon={<SwitchIcon />}
    />
  );
};
