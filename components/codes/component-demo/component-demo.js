import React, { useState } from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  Button,
  Link,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorModeValue,
  chakra,
  Fade,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { CodeBlock } from "~/components/docs/codeblock";

import * as ioIcons from "react-icons/io";

import CodeActions from "./actions";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import * as ChakraComps from "@chakra-ui/react";
import { cleanCode } from "./clean-code";
const bsIcons = require("react-icons/bs");
const ComponentDemo = (props) => {
  const preCode = require(`!!raw-loader!~/pages/preview/${props.path}/${props.file}`)
    .default;
  const postCode = cleanCode(preCode);

  const scope = { ...ChakraComps, ...ioIcons, ...bsIcons };
  return (
    <LiveProvider scope={scope} code={postCode}>
      <Box pos="relative" h="auto" py={3}>
        <LivePreview />
      </Box>
      <CodeActions />
      <Box
        _empty={{ display: "none" }}
        bg="red.600"
        borderBottomRadius="lg"
        py={2}
        px={5}
        fontSize="xs"
      >
        <LiveError />
      </Box>
    </LiveProvider>
  );
};

export default ComponentDemo;
