import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs";
import { PageHeader } from "components/docs";
import Introduction from "components/docs/installation/introduction";
import Installation from "components/docs/installation/installation";

const InstallationView = () => {
  return (
    <DocsLayout>
      <PageHead title="Installation" />
      <PageHeader>Installation</PageHeader>
      <Installation />
    </DocsLayout>
  );
};

export default InstallationView;
