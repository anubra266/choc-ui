import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "@/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Cards = () => {
  return (
    <DocsLayout>
      <PageHead title="Cards" />
      <PageHeader>Cards</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com/docs/layout/box#usage-1"
          >
            Chakra Product with Evaluation
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="cards/cpwe" file="index" multiple={[]} />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Cards;
