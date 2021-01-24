const ChakraComps = require("@chakra-ui/react");
const ChakraIcons = require("@chakra-ui/icons");
const fMotion = require("framer-motion");
const bsIcons = require("react-icons/bs");
const ioIcons = require("react-icons/io");
const io5Icons = require("react-icons/io5");
const aiIcons = require("react-icons/ai");
const mdIcons = require("react-icons/md");
const faIcons = require("react-icons/fa");
const hiIcons = require("react-icons/hi");
const biIcons = require("react-icons/bi");
const fiIcons = require("react-icons/fi");
const mobileComps = require("~/components/codes/headers/mobile-nav");
import SponsorButton from "~/components/codes/headers/sponsor-button";
import Features from "@/headers/slce/features";

export const demoScope = {
  ...ChakraComps,
  ...ChakraIcons,
  ...fMotion,
  ...ioIcons,
  ...io5Icons,
  ...bsIcons,
  ...aiIcons,
  ...mdIcons,
  ...faIcons,
  ...hiIcons,
  ...biIcons,
  ...fiIcons,
  ...mobileComps,
  SponsorButton,
  Features,
};
