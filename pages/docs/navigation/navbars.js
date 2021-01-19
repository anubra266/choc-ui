import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "@/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Navbars = () => {
  return (
    <DocsLayout>
      <PageHead title="Navbars" />
      <PageHeader>Navbars</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com"
          >
            Guest Simple Links Right
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="navbars/gslr" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Navbars;
