import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Pagination = () => {
  return (
    <DocsLayout>
      <PageHead title="Pagination" />
      <PageHeader>Pagination</PageHeader>
      <Section>
        <Section.Header>Basic Pagination</Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="pagination/bp" height="100px" />
          </Section.p>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header>Basic Pagination with Icon</Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="pagination/bpi" height="100px" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>More Pages</Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="pagination/mp" height="100px" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>Size Changer</Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="pagination/scp" height="100px" />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>Page Jumper</Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo path="pagination/pg" height="100px" />
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default Pagination;
