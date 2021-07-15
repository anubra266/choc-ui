import * as React from "react";
import { motion } from "framer-motion";

const PageTransition = (props) => (
  <motion.div
    initial={{ y: -16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  />
);

export default PageTransition;
