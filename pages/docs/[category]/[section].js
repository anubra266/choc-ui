import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";
import { Alert, Stack } from "@chakra-ui/react";

import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";

import ElementObj from "~/categories/elements.json";
import PSectionsObj from "~/categories/page-sections.json";
import NavigationObj from "~/categories/navigation.json";
import ListsObj from "~/categories/lists.json";

const Element = () => {
  const router = useRouter();
  const { category, section } = router.query;

  const Components = {
    ...ElementObj,
    ...PSectionsObj,
    ...NavigationObj,
    ...ListsObj,
  };
  const ComponentObj = Components[category]?.sections[section];
  return (
    <DocsLayout>
      <React.Fragment>
        <PageHead title={ComponentObj?.title} />
        <PageHeader>{ComponentObj?.title}</PageHeader>
        {ComponentObj?.components.map((comp, cid) => (
          <Section key={cid}>
            <Section.Header>
              <Section.a target="_blank" rel="noopener" href={comp.url}>
                {comp.name}
              </Section.a>
            </Section.Header>
            <Section.Content>
              <Section.p>
                <ComponentDemo path={comp.preview} height={comp.height} />
              </Section.p>
              {comp.alerts && (
                <Section.p>
                  <Alert
                    status={comp.alerts.status}
                    variant="left-accent"
                    borderRadius="md"
                    mt={4}
                  >
                    <Stack>
                      {comp.alerts.content.map((al, alid) => (
                        <p key={alid}>{ReactHtmlParser(al)}</p>
                      ))}
                    </Stack>
                  </Alert>
                </Section.p>
              )}
            </Section.Content>
          </Section>
        ))}
      </React.Fragment>
    </DocsLayout>
  );
};

export default Element;
