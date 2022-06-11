import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ActionButton } from "components/navbar/action-button";

export const ColorModeToggle = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <ActionButton
      aria-label={`Switch to ${text} mode`}
      onClick={toggleMode}
      icon={<SwitchIcon />}
    />
  );
};
