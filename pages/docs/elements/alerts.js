import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";

const Alerts = () => {
  return (
    <DocsLayout>
      <PageHead title="Alerts" />
      <PageHeader>Alerts</PageHeader>
      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://merakiui.com/"
          >
            Success
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="alerts/success"
              file="index"
              height="100px"
              multiple={[]}
            />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://merakiui.com/"
          >
            Info
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="alerts/info"
              file="index"
              height="100px"
              multiple={[]}
            />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://merakiui.com/"
          >
            Warning
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="alerts/warning"
              file="index"
              height="100px"
              multiple={[]}
            />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://merakiui.com/"
          >
            Error
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="alerts/error"
              file="index"
              height="100px"
              multiple={[]}
            />
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a
            target="_blank"
            rel="noopener"
            href="https://merakiui.com/"
          >
            Notification
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="alerts/notification"
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

export default Alerts;
