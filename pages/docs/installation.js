import React from "react";
import PageHead from "~/components/head";
import DocsLayout from "~/components/layouts/docs";
import { PageHeader } from "~/components/docs";
import Introduction from "~/components/pages/installation/introduction";
import Installation from "~/components/pages/installation/installation";

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
