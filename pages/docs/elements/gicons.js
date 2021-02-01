import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";
import { Alert, Stack } from "@chakra-ui/react";

const GradientIcons = () => {
  return (
    <DocsLayout>
      <PageHead title="Gradient Icons" image="/thumbnails/gicons.png" />
      <PageHeader>Gradient Icons</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com"
          >
            Data URL Method
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="gicons/dum" height="100px" />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
              <Stack>
                <p>
                  The <code> linearGradient id</code> is appended after the svg
                  element in the data url.
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://chakra-ui.com"
          >
            Component Method
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="gicons/cm" height="100px" />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default GradientIcons;
