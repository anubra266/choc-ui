import React from "react";
import PageHead from "components/head";
import { PageHeader, Section } from "components/docs";
import ComponentDemo from "components/component-demo";
import DocsLayout from "components/layouts/docs/index";
import { Alert, Stack } from "@chakra-ui/react";

import ReactHtmlParser from "react-html-parser";

import { componentsObj } from "categories/parse-categories";
import { AdBox } from "analytics/ads";

const Element = ({ category, section }) => {
  const ComponentObj = componentsObj[category]?.sections[section];
  console.log("section :>> ", componentsObj[category]);
  return (
    <DocsLayout>
      <React.Fragment>
        <PageHead title={ComponentObj?.title} image={ComponentObj?.image} />
        <PageHeader>{ComponentObj?.title}</PageHeader>
        <AdBox />
        {ComponentObj?.components.map((comp: any) => (
          <Section key={comp.preview} id={comp.preview}>
            <Section.Content>
              <ComponentDemo comp={comp} />
              {comp.alerts && (
                <Section.p>
                  <Alert
                    status={comp.alerts.status}
                    variant="left-accent"
                    rounded="md"
                    mt={4}
                  >
                    <Stack>
                      {comp.alerts.content.map((al: any, alid: any) => (
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

Element.getInitialProps = async (ctx) => {
  return { category: ctx.query.category, section: ctx.query.section };
};

export default Element;
