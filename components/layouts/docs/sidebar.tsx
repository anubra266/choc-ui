import React from "react";
import { Box, useDisclosure, IconButton } from "@chakra-ui/react";
import SidebarContent from "./sidebar-content";
import { MdMenu, MdClose } from "react-icons/md";

const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });
  const SidebarIcon = isOpen ? MdClose : MdMenu;

  return (
    <React.Fragment>
      <Box
        id="sidebar"
        as="nav"
        aria-label="Main Navigation"
        pos="sticky"
        sx={{
          overscrollBehavior: "contain",
        }}
        top="6.5rem"
        w={isOpen ? "280px" : 0}
        transition="width .2s ease-in-out"
        h="calc(((100vh - 1.5rem) - 64px) - 42px);"
        pb="8"
        mt="20"
        overflowY="auto"
        className="sidebar-content"
        flexShrink={0}
        display={{ base: "none", md: "block" }}
        shadow="sm"
      >
        <IconButton
          pos="sticky"
          mt={1}
          right={0}
          top={0}
          zIndex={10}
          roundedLeft={0}
          size="md"
          fontSize="lg"
          aria-label={`Toggle Sidebar`}
          variant="solid"
          colorScheme="gray"
          onClick={onClose}
          icon={<SidebarIcon />}
        />
        <SidebarContent />
      </Box>
      {!isOpen && (
        <IconButton
          pos="fixed"
          top={20}
          zIndex={10}
          left={0}
          roundedLeft={0}
          size="md"
          fontSize="lg"
          aria-label={`Toggle Sidebar`}
          variant="solid"
          colorScheme="gray"
          onClick={onOpen}
          icon={<SidebarIcon />}
        />
      )}
    </React.Fragment>
  );
};

export default Sidebar;
