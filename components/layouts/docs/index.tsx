// a

import { Flex, chakra } from "@chakra-ui/react";
import React from "react";
import SiteLayout from "components/layouts/site";
import Credits from "components/credits";
import { Splitbee } from "components/splitbee";
import { motion } from "framer-motion";
import { Sidebar } from "components/sidebar";
import { useRouter } from "next/router";

const Docs = ({ children }) => {
  const router = useRouter();
  return (
    <SiteLayout>
      <Flex as="main" className="main-content">
        <Sidebar />
        <chakra.div
          flex={1}
          px="5"
          pt="5"
          overflow="auto"
          maxH="calc(100vh - var(--chakra-sizes-16))"
        >
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={router.asPath}
          >
            {children}
            <Splitbee />
            <Credits />
          </motion.div>
        </chakra.div>
      </Flex>
    </SiteLayout>
  );
};

export default Docs;
