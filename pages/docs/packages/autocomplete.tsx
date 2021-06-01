import React from "react";
import PageHead from "components/head";
import { PageHeader, Section } from "components/docs";
import ComponentDemo from "components/component-demo";
import DocsLayout from "components/layouts/docs/index";
import { CodeBlock } from "components/docs/codeblock";
import * as AutoComplete from "@choc-ui/chakra-autocomplete";
import { Alert, Stack } from "@chakra-ui/react";
import { AdBox } from "analytics/ads";

const PaginationPackage = () => {
  return (
    <DocsLayout>
      <PageHead
        title="Autocomplete Package - @choc-ui/chakra-autocomplete"
        image="paginator.png"
      />
      <PageHeader>
        <Section.a
          target="_blank"
          rel="noopener"
          href="hhttps://github.com/anubra266/choc-autocomplete"
        >
          @choc-ui/chakra-autocomplete
        </Section.a>
      </PageHeader>
      <AdBox />
      <Section.p>
        <Alert status="success" variant="left-accent" rounded="md" mt={4}>
          <Stack>
            <p>
              Our <b>Code Editor</b> is editable, and the preview is live.
            </p>
          </Stack>
        </Alert>
      </Section.p>
      <Section id="installation">
        <Section.Header>
          <Section.a target="_blank" rel="noopener" href="">
            Installation
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <CodeBlock lang="bash">{`npm i @choc-ui/chakra-autocomplete`}</CodeBlock>

            <CodeBlock lang="bash">{`yarn add @choc-ui/chakra-autocomplete`}</CodeBlock>
          </Section.p>
        </Section.Content>
      </Section>
      <Section id="import">
        <Section.Header>
          <Section.a target="_blank" rel="noopener" href="">
            Import
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <CodeBlock lang="js">{`import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteGroup,
  AutoCompleteFixedItem,
} from '@choc-ui/chakra-autocomplete';`}</CodeBlock>
          </Section.p>
        </Section.Content>
      </Section>
      <Section id="bc">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Basic Combobox" }}
              path="packages/autocomplete"
              scope={AutoComplete}
              height="100px"
            />
          </Section.p>
        </Section.Content>
      </Section>
      <Section id="group">
        <Section.Content>
          <Section.p>
            <Alert status="success" variant="left-accent" rounded="md" mb={4}>
              You can create groups with the &nbsp;
              <code>AutoCompleteGroup </code>&nbsp; Component
            </Alert>
          </Section.p>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Groups" }}
              path="packages/autocomplete/group"
              scope={AutoComplete}
              height="100px"
            />
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="ais">
        <Section.Content>
          <Section.p>
            <Alert
              status="success"
              variant="left-accent"
              rounded="md"
              mb={4}
              display="block"
            >
              To access the internal state of the &nbsp;
              <code> AutoComplete</code>, use a function as children (commonly
              known as a render prop). You'll get access to the internal state
              &nbsp;<code>isOpen</code>&nbsp; and method &nbsp;{" "}
              <code>onClose</code>.
            </Alert>
            <Alert status="info" variant="left-accent" rounded="md" mb={4}>
              Watch the Icon on the right.
            </Alert>
          </Section.p>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Accessing Internal State" }}
              path="packages/autocomplete/ais"
              scope={AutoComplete}
              height="100px"
            />
          </Section.p>
        </Section.Content>
      </Section>
      <Section id="cur">
        <Section.Content>
          <Section.p>
            <Alert
              status="success"
              variant="left-accent"
              rounded="md"
              mb={4}
              display="block"
            >
              You can Render whatever you want. The &nbsp;
              <code>AutoCompleteItem</code>&nbsp; is a regular Chakra Boxes.
            </Alert>
          </Section.p>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Custom Rendering" }}
              path="packages/autocomplete/cur"
              scope={AutoComplete}
              height="100px"
            />
          </Section.p>
        </Section.Content>
      </Section>

      {/* <Section id="plg">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Playground" }}
              path="packages/autocomplete/plg"
              scope={AutoComplete}
              height="100px"
            />
          </Section.p>
        </Section.Content>
      </Section> */}
    </DocsLayout>
  );
};

export default PaginationPackage;
