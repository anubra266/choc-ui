import {
  IconButton,
  chakra,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import { IoCloseSharp } from "react-icons/io5";
import { BiExpand } from "react-icons/bi";
import { SidebarContent } from "components/sidebar/sidebar-content";

export const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });
  const [hovered, setHovered] = useBoolean();

  return (
    <chakra.div h="calc((100vh - var(--chakra-sizes-16)))" overflowY="auto">
      {!isOpen && (
        <IconButton
          aria-label="Open sidebar"
          icon={<BiExpand />}
          size="xs"
          opacity={hovered ? 1 : 0}
          _hover={{ opacity: 1 }}
          onClick={onOpen}
          pos="absolute"
          rounded="none"
          roundedRight="md"
        />
      )}
      <chakra.aside
        role="group"
        transition={`width .2s ease, opacity .${isOpen ? 3 : 1}s ease`}
        sx={{
          overscrollBehavior: "contain",
        }}
        overflowY="auto"
        h="full"
        w={isOpen ? "72" : "1"}
        opacity={isOpen ? "1" : "0"}
        pos="relative"
        bg="layout.card"
        onMouseEnter={setHovered.on}
        onMouseLeave={setHovered.off}
      >
        <IconButton
          aria-label="Close sidebar"
          icon={<IoCloseSharp />}
          size="xs"
          pos="absolute"
          top="0"
          right="0"
          opacity="0"
          _groupHover={{
            opacity: "1",
          }}
          onClick={onClose}
          rounded="none"
          roundedBottomLeft="md"
        />
        <SidebarContent ml="5" pt="5" />
      </chakra.aside>
    </chakra.div>
  );
};
