import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "@/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const CTA = () => {
  return (
    <DocsLayout>
      <PageHead title="CTA Sections" />
      <PageHeader>Call to Action</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://tailwindui.com/components/marketing/sections/cta-sections#component-90c79fbd0596cc4e601da985ca825994"
          >
            Simple Justified
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="cta/sj" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>    

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://tailwindui.com/components/marketing/sections/cta-sections#component-8f2857c2b9324bb3fe8b1c455438ae07"
          >
            Simple Stacked
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="cta/sst" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>    
    </DocsLayout>
  );
};

export default CTA;
