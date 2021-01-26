import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Tables = () => {
  return (
    <DocsLayout>
      <PageHead title="Tables" />
      <PageHeader>Tables</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com"
          >
            Mobile Responsive Table
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="tables/mrt" />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Tables;
