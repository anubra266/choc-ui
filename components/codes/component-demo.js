import React from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import { CodeBlock } from "~/components/docs/codeblock";

const ComponentDemo = (props) => {
  const getCode = (file) =>
    require(`!!raw-loader!~/components/codes/${props.path}/${file}`).default;
  const Demo = require(`~/pages/preview/${props.path}/${props.file}`).default;
  const code = require(`!!raw-loader!~/pages/preview/${props.path}/${props.file}`)
    .default;
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
        Enlarge
      </Button>
    </Link>
  );
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code - index.js </Tab>
        {props.multiple.map((file, fid) => (
          <Tab key={`c-file-name-${fid}`}>{file}.js</Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box pos="relative">
            <Demo demo />
            {previewButton}
          </Box>
        </TabPanel>
        <TabPanel height="300px" overflowY="auto">
          <CodeBlock language="jsx">{code}</CodeBlock>
        </TabPanel>
        {props.multiple.map((file, fid) => (
          <TabPanel height="300px" overflowY="auto" key={`c-file-code-${fid}`}>
            <CodeBlock language="jsx">{getCode(file)}</CodeBlock>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ComponentDemo;
