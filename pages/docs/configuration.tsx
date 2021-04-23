import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs/index";
import Provider from "components/docs/configuration/provider";
import CustomTheme from "components/docs/configuration/custom-theme";
import { PageHeader } from "components/docs";
import { AdBox } from "analytics/ads";

const Configuration = () => {
  return (
    <DocsLayout>
      <PageHead title="Configuration" />
      <PageHeader>Configuration</PageHeader>
      <AdBox />
      <Provider />
      <CustomTheme />
    </DocsLayout>
  );
};

export default Configuration;
