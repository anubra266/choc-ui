import { IconButton, useDisclosure } from "@chakra-ui/react";
import {
  ThemeEditor,
  ThemeEditorDrawer,
  ThemeEditorColors,
  useThemeEditor,
} from "@hypertheme-editor/chakra-ui";
import { CgColorPicker } from "react-icons/cg";
import { IoColorPalette } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context";

const CustomThemeEditor = () => {
  const { setBrand } = useContext(ThemeContext);
  const { theme } = useThemeEditor();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // update brand colors if theme updates from hypertheme
  useEffect(() => {
    setBrand(theme?.colors?.brand);
  }, [theme]);

  return (
    <>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label="Switch Brand Color"
        variant="ghost"
        color="current"
        onClick={onOpen}
        icon={<IoColorPalette />}
      />
      <ThemeEditor isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <ThemeEditorDrawer hideUpgradeToPro hideCredits>
          <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        </ThemeEditorDrawer>
      </ThemeEditor>
    </>
  );
};

export default CustomThemeEditor;
