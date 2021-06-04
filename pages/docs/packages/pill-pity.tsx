import React from "react";
import PageHead from "components/head";
import { PageHeader, Section } from "components/docs";
import ComponentDemo from "components/component-demo";
import DocsLayout from "components/layouts/docs/index";
import { CodeBlock } from "components/docs/codeblock";
import PillPity from "pill-pity";
import { Alert, Stack } from "@chakra-ui/react";
import { AdBox } from "analytics/ads";

const PaginationPackage = () => {
  return (
    <DocsLayout>
      <PageHead
        title="Hero Patterns Package - Pill-Pity"
        image="pill-pity.png"
      />
      <PageHeader>
        <Section.a
          target="_blank"
          rel="noopener"
          href="hhttps://github.com/anubra266/pill-pity"
        >
          Pill-Pity
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
            <CodeBlock lang="bash">{`npm i pill-pity`}</CodeBlock>

            <CodeBlock lang="bash">{`yarn add pill-pity`}</CodeBlock>
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
            <CodeBlock lang="js">{`import PillPity from 'pill-pity';`}</CodeBlock>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="plg">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Playground" }}
              path="packages/pill-pity/plg"
              scope={{ PillPity }}
              height="100px"
            />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default PaginationPackage;
