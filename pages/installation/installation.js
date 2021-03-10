import React from "react";
import { Section } from "components/docs";
import { CodeBlock } from "components/docs/codeblock";

const Installation = () => {
  return (
    <Section>
      <Section.Header>Installation</Section.Header>
      <Section.Content>
        <Section.p>This is quite straightforward.</Section.p>
        <Section.p>
          <CodeBlock lang="bash">
            {`npm i @chakra-ui/react @chakra-ui/icons @emotion/react @emotion/styled framer-motion react-icons`}
          </CodeBlock>
          <CodeBlock lang="bash">
            {`yarn add @chakra-ui/react @chakra-ui/icons @emotion/react @emotion/styled framer-motion react-icons`}
          </CodeBlock>
        </Section.p>
        <Section.p>
          If you meet any complexities, just head along to{" "}
          <Section.a
            target="_blank"
            href="https://chakra-ui.com/docs/getting-started"
          >
            Chakra UI's site
          </Section.a>{" "}
          and follow the Instructions there.
        </Section.p>
      </Section.Content>
    </Section>
  );
};

export default Installation;
