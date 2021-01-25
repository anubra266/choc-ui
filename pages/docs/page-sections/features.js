import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
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
            <ComponentDemo path="features/s3c" />
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
            <ComponentDemo path="features/c2g" />
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
            <ComponentDemo path="features/fgl" />
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
            With feature list
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="features/wfl" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://tailwindui.com/components/marketing/sections/feature-sections#component-a49bfb9517be12ba0fe0dd841c3a8766"
          >
            Offset 2x2 grid{" "}
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="features/o2g" />
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
            Alternative side-by-side with media
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="features/asm" />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Features;
