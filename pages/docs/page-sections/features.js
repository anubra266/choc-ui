import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "@/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Features = () => {
  return (
    <DocsLayout>
      <PageHead title="Features" />
      <PageHeader>Features</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/features/"
          >
            Simple 3 Column
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="features/s3c" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://tailwindui.com/components/marketing/sections/feature-sections#component-64ac58e032276db96bf343a8d4f332a8"
          >
            Centered 2x2 grid
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="features/c2g" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/features/"
          >
            With feature grid list
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="features/fgl" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Features;
