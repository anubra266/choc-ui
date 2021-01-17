import React from "react";
import { PageHeader, Section } from "~/components/docs";
import PageHead from "~/components/head";
import DocsLayout from "~/components/layouts/docs/index";
import ComponentDemo from "@/component-demo";

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
            Chakra UI Site Navbar
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="navbars/chuina"
              file="index"
              multiple={["mobile-nav", "sponsor-button"]}
            />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};
export default Navbars;
