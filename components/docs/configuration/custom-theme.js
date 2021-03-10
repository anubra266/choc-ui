import React from "react";
import { CodeBlock } from "components/docs/codeblock";
import { Section } from "components/docs";
import customTheme from "!!raw-loader!components/codes/configuration/custom-theme";

const CustomTheme = () => {
  return (
    <Section>
      <Section.Header>Add custom theme (Optional)</Section.Header>
      <Section.Content>
        <Section.p>
          If you need to customize the default chakra theme to match your design
          requirements, you can extend the <code> theme</code> from
          <code> @chakra-ui/react</code>.
        </Section.p>

        <Section.p>
          Chakra UI provides an <code> extendTheme</code> function that deep
          merges the default theme with your customizations.
        </Section.p>
        <Section.p>
          <CodeBlock lang="jsx">{customTheme}</CodeBlock>
        </Section.p>
      </Section.Content>
    </Section>
  );
};

export default CustomTheme;
