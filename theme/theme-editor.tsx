import { IconButton } from "@chakra-ui/react";
import {
  ThemeEditor,
  ThemeEditorDrawer,
  ThemeEditorColors,
  useThemeEditor,
} from "@hypertheme-editor/chakra-ui";
import { CgColorPicker } from "react-icons/cg";
import { IoColorPalette } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context";

const CustomThemeEditor = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setBrand } = useContext(ThemeContext);
  const { theme } = useThemeEditor();

  // update brand colors if theme updates from hypertheme
  useEffect(() => {
    setBrand(theme?.colors?.brand);
  }, [theme]);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <ThemeEditor isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label="Switch Brand Color"
        variant="ghost"
        color="current"
        onClick={onOpen}
        icon={<IoColorPalette />}
      />
      <ThemeEditorDrawer hideUpgradeToPro hideCredits>
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  );
};

export default CustomThemeEditor;
