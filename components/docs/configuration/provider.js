import React from "react";
import { CodeBlock } from "components/docs/codeblock";
import { Section } from "components/docs";
import { Alert, Stack } from "@chakra-ui/react";
import provider from "!!raw-loader!components/codes/configuration/provider";

const Provider = () => {
  return (
    <Section>
      <Section.Header>Setup Provider</Section.Header>
      <Section.Content>
        <Section.p>
          For Chakra UI to work correctly, you need to setup the{" "}
          <code>ChakraProvider</code> at the root of your application.
        </Section.p>
        <Section.p>
          Go to the root of your application and do this:
          <CodeBlock lang="jsx">{provider}</CodeBlock>
        </Section.p>
        <Section.p>
          <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
            <Stack>
              <p>
                For Next.js, you need to set this up in
                <code> pages/_app.js</code> or <code> pages/_app.tsx</code>{" "}
              </p>
              <p>
                For Gatsby, install the
                <code> @chakra-ui/gatsby-plugin </code>. It does it
                automatically for you.{" "}
              </p>
              <p>
                For Create React App, you need to set this up in
                <code> index.js</code> or <code> index.tsx</code>{" "}
              </p>
            </Stack>
          </Alert>
        </Section.p>
      </Section.Content>
    </Section>
  );
};

export default Provider;
