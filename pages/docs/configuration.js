import React from "react";
import PageHead from "~/components/head";
import DocsLayout from "~/components/layouts/docs/index";
import Provider from "~/components/pages/configuration/provider";
import CustomTheme from "~/components/pages/configuration/custom-theme";

const Configuration = () => {
  return (
    <DocsLayout>
      <PageHead title="Configuration" />
      <Provider />
      <CustomTheme />
    </DocsLayout>
  );
};

export default Configuration;
