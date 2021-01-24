import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Badges = () => {
  return (
    <DocsLayout>
      <PageHead title="Badges" />
      <PageHeader>Badges</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://material-ui.com/components/badges/"
          >
            Icon with badge{" "}
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="badges/bwi"
              file="index"
              multiple={[]}
              height="100px"
            />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Badges;
