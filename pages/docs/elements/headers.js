import React from "react";
import { PageHeader, Section } from "~/components/docs";
import PageHead from "~/components/head";
import DocsLayout from "~/components/layouts/docs/index";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import { Box } from "@chakra-ui/react";

const Headers = () => {
  return (
    <DocsLayout>
      <PageHead title="Headers" />
      <Box>
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
              <ComponentDemo path="headers/chuihe" height="300px" />
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
              Centered with bottom border
            </Section.a>
          </Section.Header>
          <Section.Content>
            <Section.p>
              <ComponentDemo path="headers/cwbb" height="300px" />
            </Section.p>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header>
            <Section.a
              target="_blank"
              rel="noopener"
              href="https://tailwindui.com/components/marketing/elements/headers#component-a2aed5adfe85cafed1898b5def5eb40a"
            >
              Simple links centered
            </Section.a>
          </Section.Header>
          <Section.Content>
            <Section.p>
              <ComponentDemo path="headers/slce" height="300px" />
            </Section.p>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header>
            <Section.a
              target="_blank"
              rel="noopener"
              href="https://tailwindui.com/components/marketing/elements/headers#component-c2e98654c961b126b887a7909c121d4b"
            >
              Simple links on left
            </Section.a>
          </Section.Header>
          <Section.Content>
            <Section.p>
              <ComponentDemo path="headers/slol" height="300px" />
            </Section.p>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header>
            <Section.a
              target="_blank"
              rel="noopener"
              href="https://tailwindui.com/components/marketing/elements/headers#component-363ff3ec22979c3722842d62aa751178"
            >
              With full-width flyouts
            </Section.a>
          </Section.Header>
          <Section.Content>
            <Section.p>
              <ComponentDemo path="headers/wfwf" height="300px" />
            </Section.p>
          </Section.Content>
        </Section>{" "}
      </Box>
    </DocsLayout>
  );
};
export default Headers;
