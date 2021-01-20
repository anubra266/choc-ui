import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <IconButton
      borderRightRadius={0}
      borderLeftRadius="full"
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="solid"
      colorScheme="brand"
      ml={{ base: "0", md: "3" }}
      onClick={toggleMode}
      icon={<SwitchIcon />}
    />
  );
};
