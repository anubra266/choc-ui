import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Fresh = () => {
  return (
    <DocsLayout>
      <PageHead title="Fresh" />
      <PageHeader>Fresh</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com"
          >
            Name
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="headers/chuihe" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Fresh;
