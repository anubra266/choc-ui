import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "@/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Heros = () => {
  return (
    <DocsLayout>
      <PageHead title="Heros" />
      <PageHeader>Heros</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/heroes/"
          >
            Kutty Hero 1
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
          Work in progress!
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Heros;
