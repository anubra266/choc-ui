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
            href="https://merakiui.com/"
          >
            Article
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="cards/ma" file="index"/>
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://merakiui.com/"
          >
          Article With SM icons
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="cards/awsi" file="index"/>
          </Section.p>
        </Section.Content>
      </Section>


      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com/docs/layout/box#usage-1"
          >
            Product with Evaluation 1
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="cards/cpwe" file="index"/>
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Cards;
