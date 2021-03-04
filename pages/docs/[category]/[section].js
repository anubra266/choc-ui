import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";
import { Alert, Stack } from "@chakra-ui/react";

import ReactHtmlParser from "react-html-parser";

import { componentsObj } from "~/categories/parse-categories";

const Element = ({ category, section }) => {
  const ComponentObj = componentsObj[category]?.sections[section];
  return (
    <DocsLayout>
      <React.Fragment>
        <PageHead title={ComponentObj?.title} image={ComponentObj?.image} />
        <PageHeader>{ComponentObj?.title}</PageHeader>
        {ComponentObj?.components.map((comp, cid) => (
          <Section key={cid} id={comp.preview}>
            <Section.Header>
              <Section.a href={`#${comp.preview}`}>{comp.name}</Section.a>
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
                    rounded="md"
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

Element.getInitialProps = async (ctx) => {
  return { category: ctx.query.category, section: ctx.query.section };
};

export default Element;
