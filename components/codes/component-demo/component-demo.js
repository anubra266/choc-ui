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

import { ImDisplay } from "react-icons/im";

import CodeActions from "./actions"

const ComponentDemo = (props) => {
  return (
    <Box>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Preview</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box pos="relative" h={props.height || "400px"}>
              The Demo Here
            </Box>
          </TabPanel>
          <TabPanel height="500px" overflowY="auto">
            <Box pos="relative" bg="brand.900" p={2}>
              Code Here
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CodeActions />
    </Box>
  );
};

export default ComponentDemo;
