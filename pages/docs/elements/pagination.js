import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "@/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Pagination = () => {
  return (
    <DocsLayout>
      <PageHead title="Pagination" />
      <PageHeader>Pagination</PageHeader>
      <Section>
        <Section.Header>Simple Raw Pagination</Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="pagination/srp"
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

export default Pagination;
