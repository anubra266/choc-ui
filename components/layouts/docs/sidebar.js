import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import SidebarContent from "./sidebar-content";

const Sidebar = () => {
    return (
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
            boxShadow="lg"
            bg={useColorModeValue("brand.50", "brand.600")}
        >
            <SidebarContent />
        </Box>
    );
};

export default Sidebar;
