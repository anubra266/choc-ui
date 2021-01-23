//a

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
} from "@chakra-ui/react";
import { CodeBlock } from "~/components/docs/codeblock";
import { ImDisplay } from "react-icons/im";

const ComponentDemo = (props) => {
  const getCode = (file) =>
    require(`!!raw-loader!~/components/codes/${file}`).default;
  const Demo = require(`~/pages/preview/${props.path}/${props.file}`).default;
  const code = require(`!!raw-loader!~/pages/preview/${props.path}/${props.file}`)
    .default;
  const getName = (file) => {
    const arr = file.split("/");
    return arr[arr.length - 1];
  };
  const previewButton = (
    <Link isExternal href={`/preview/${props.path}`}>
      <Button
        pos="absolute"
        right={4}
        top={2}
        size="sm"
        bg="gray.700"
        color="white"
        _hover={{ bg: "black" }}
      >
        Demo
      </Button>
    </Link>
  );
  const [width, setWidth] = useState(100);
  const [loading, setLoading] = useState(true);

  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Preview</Tab>
        <Tab>Code - index.js </Tab>
        {props.multiple &&
          props.multiple.map((file, fid) => (
            <Tab key={`c-file-name-${fid}`}>{getName(file)}.js</Tab>
          ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Slider value={width} onChange={(val) => setWidth(val)}>
            <SliderTrack bg="brand.100">
              <SliderFilledTrack bg="brand.500" />
            </SliderTrack>
            <SliderThumb boxSize={6} zIndex="base">
              <Box color="brand.500" as={ImDisplay} />
            </SliderThumb>
          </Slider>
          <Box pos="relative" h={props.height || "400px"}>
            <Box
              as="iframe"
              src={`/preview/${props.path}`}
              w={`${width}%`}
              h="100%"
              border="none"
              key={useColorModeValue(
                `/preview/${props.path}1`,
                `/preview/${props.path}2`
              )}
              loading="lazy"
              onLoad={() => setLoading(false)}
            />
            <Fade in={loading}>
              <Box
                bg="black"
                opacity={0.7}
                pos="absolute"
                top={0}
                left={0}
                bottom={0}
                right={0}
                fontWeight="bold"
                fontSize="2xl"
                alignItems="center"
                justifyContent="center"
                display={loading ? "flex" : "flex"}
              >
                <chakra.span>Loading... </chakra.span>
              </Box>
            </Fade>
            {previewButton}
          </Box>
        </TabPanel>
        <TabPanel height="300px" overflowY="auto">
          <CodeBlock language="jsx">{code}</CodeBlock>
        </TabPanel>
        {props.multiple &&
          props.multiple.map((file, fid) => (
            <TabPanel overflowY="auto" key={`c-file-code-${fid}`}>
              <Box pos="relative" h="400px">
                <CodeBlock language="jsx">{getCode(file)}</CodeBlock>
              </Box>
            </TabPanel>
          ))}
      </TabPanels>
    </Tabs>
  );
};

export default ComponentDemo;
