import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
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
            With Signup
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="heros/kh1" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/heroes/"
          >
            Simple Centered
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="heros/kh2" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/heroes/"
          >
            Split
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="heros/kh3" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/heroes/"
          >
            With App Screenshot
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="heros/kh4" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/heroes/"
          >
            Kutty Signup form
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="heros/kh5" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/heroes/"
          >
            With Angled Image
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="heros/twai" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://kutty.netlify.app/components/heroes/"
          >
            Simple Centered 2
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="heros/tsc" />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Heros;
