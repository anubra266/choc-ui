import React from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels, Box } from "@chakra-ui/react";
import { CodeBlock } from "~/components/docs/codeblock";

const ComponentDemo = (props) => {
  const getCode = (file) =>
    require(`!!raw-loader!./${props.path}/${file}`).default;
  const Demo = require(`./${props.path}/${props.file}`).default;
  const code = getCode(props.file);
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
          <Demo />
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
