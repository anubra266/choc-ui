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

import CodeActions from "./actions";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { demoScope } from "./demo-scope";

import { cleanCode } from "./clean-code";
const ComponentDemo = (props) => {
  const preCode = require(`!!raw-loader!~/pages/preview/${props.path}/${props.file}`)
    .default;

  const postCode = cleanCode(preCode);

  return (
    <LiveProvider scope={demoScope} code={postCode}>
      <Box pos="relative" minH={props.height || "500px"} py={3} overflow="auto">
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
