import React from "react";
import SiteLayout from "~/components/layouts/site";
import Sidebar from "./sidebar";
import PageTransition from "./page-transition";
import Container from "./container";
import { Box } from "@chakra-ui/react";

const Docs = () => {
  return (
    <SiteLayout>
      <Container as="main" className="main-content">
        <Box display={{ base: "block", md: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Box
              id="content"
              pt={3}
              px={5}
              mt="4.5rem"
              mx="auto"
              maxW="48rem"
              minH="76vh"
            >
              <PageTransition>{children}</PageTransition>
            </Box>
          </div>
        </Box>
      </Container>
    </SiteLayout>
  );
};

export default Docs;
