// a

import React from "react";
import SiteLayout from "components/layouts/site";
import Sidebar from "./sidebar";
import PageTransition from "./page-transition";
import Container from "./container";
import { Box } from "@chakra-ui/react";
import Credits from "components/credits";
const Docs = ({ children }) => {
  return (
    <SiteLayout>
      <Container as="main" className="main-content">
        <Box display={{ base: "block", md: "flex" }}>
          <Sidebar />

          <div style={{ flex: 1 }} id="page-content">
            <Box id="content" pt={3} px={5} mt="4.5rem" mx="auto" minH="76vh">
              <PageTransition>{children}</PageTransition>
              <Credits />
            </Box>
          </div>
        </Box>
      </Container>
    </SiteLayout>
  );
};

export default Docs;
