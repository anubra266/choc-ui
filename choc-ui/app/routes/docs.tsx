import { Flex, chakra } from "@chakra-ui/react";
import { Outlet, useParams } from "@remix-run/react";
import { motion } from "framer-motion";
import Credits from "~/components/docs/credits";
import { SplitbeeBadge } from "~/components/docs/splitbee-badge";

import Navbar from "~/components/navbar";
import { Sidebar } from "~/components/sidebar";

export const DocsIndex = () => {
  const { section } = useParams();

  return (
    <>
      <Navbar />
      <Flex>
        <Sidebar />
        <chakra.div flex={1} px="5" pt="5">
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={section}
          >
            <Outlet />
            <SplitbeeBadge />
            <Credits />
          </motion.div>
        </chakra.div>
      </Flex>
    </>
  );
};

export default DocsIndex;
