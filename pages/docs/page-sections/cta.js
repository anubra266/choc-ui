import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "@/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const CTA = () => {
  return (
    <DocsLayout>
      <PageHead title="CTA Sections" />
      <PageHeader>CTA</PageHeader>
      {/*(<Section>
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
      </Section>)*/}
    </DocsLayout>
  );
};

export default CTA;
