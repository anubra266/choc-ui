import React from "react";
import { PageHeader, Section } from "~/components/docs";
import PageHead from "~/components/head";
import DocsLayout from "~/components/layouts/docs/index";
import ComponentDemo from "@/component-demo";

const Headers = () => {
  return (
    <DocsLayout>
      <PageHead title="Headers" />
      <PageHeader>Headers</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com"
          >
            Chakra UI Site Header
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="headers/chuihe"
              file="index"
              multiple={["headers/mobile-nav", "headers/sponsor-button"]}
            />
          </Section.p>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://tailwindui.com/components/marketing/elements/headers#component-1c0390a81b16cf5028aeff08be955766"
          >
            Simple links centered
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="headers/slce"
              file="index"
              multiple={["headers/mobile-nav", "headers/slce/features"]}
            />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};
export default Headers;
