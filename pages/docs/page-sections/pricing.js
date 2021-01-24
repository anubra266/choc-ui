import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Pricing = () => {
  return (
    <DocsLayout>
      <PageHead title="Pricing Components" />
      <PageHeader>Pricing</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://tailwindui.com/components/marketing/sections/pricing#component-d91bc5ed1deb87275decb69f70274650"
          >
            Three tiers with emphasized tier
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="pricing/twet" file="index" multiple={[]}  height="500px" />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Pricing;
