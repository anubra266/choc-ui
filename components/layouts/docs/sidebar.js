import React from "react";
import {
  Box,
  useColorModeValue,
  useDisclosure,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import SidebarContent from "./sidebar-content";
import { MdMenu, MdClose } from "react-icons/md";

const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });
  const SidebarIcon = isOpen ? MdClose : MdMenu;
  return (
    <React.Fragment>
      {isOpen ? (
        <Box
          as="nav"
          aria-label="Main Navigation"
          pos="sticky"
          sx={{
            overscrollBehavior: "contain",
          }}
          top="6.5rem"
          w="280px"
          h="calc(((100vh - 1.5rem) - 64px) - 42px);"
          pb="8"
          mt="20"
          overflowY="auto"
          className="sidebar-content"
          flexShrink={0}
          display={{ base: "none", md: "block" }}
          boxShadow="sm"
        >
          <IconButton
            position="sticky"
            mt={1}
            right={0}
            top={0}
            zIndex={10}
            borderLeftRadius={0}
            size="md"
            fontSize="lg"
            aria-label={`Toggle Sidebar`}
            variant="solid"
            colorScheme="brand"
            onClick={onClose}
            icon={<SidebarIcon />}
          />
          <SidebarContent />
        </Box>
      ) : (
        <IconButton
          pos="fixed"
          top={20}
          zIndex={10}
          left={0}
          borderLeftRadius={0}
          size="md"
          fontSize="lg"
          aria-label={`Toggle Sidebar`}
          variant="solid"
          colorScheme="brand"
          onClick={onOpen}
          icon={<SidebarIcon />}
        />
      )}
    </React.Fragment>
  );
};

export default Sidebar;
