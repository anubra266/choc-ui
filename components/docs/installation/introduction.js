import React from "react";

import { Section } from "components/docs";

import {
  me,
  antd,
  chakraui,
  pagelayouts,
  navbars,
  sidebars,
  hoc,
  gissue,
  chrisham,
} from "./variables";
const Introduction = () => {
  return (
    <Section>
      <Section.Header>Introduction</Section.Header>
      <Section.Content>
        <Section.p>
          This is developed by the worst designer I've ever known; {me} 🙄. I
          used {antd} for a very long time. It had every thing I needed in my
          projects.
        </Section.p>
        <Section.p>
          Then I came across {chakraui}. Hard to explain but
          {chakraui} felt <em>free and fluid</em>. Looking back at {antd}, it
          was <em>stern and serious</em>. - <i>`The Rich but Tough Dad`</i>.
        </Section.p>
        <Section.p>
          After a lot of consideration, I concluded that what mostly held me
          back to {antd} was it's depth in ready made components. There were
          ready made {pagelayouts} with {navbars}, {sidebars} and all the {hoc}{" "}
          I could think of.
        </Section.p>
        <Section.p>
          So I went crying; I created a {gissue} on the {chakraui} Repository.
          Then a Wonderful Designer {chrisham} posted code for some components
          she had converted into {chakraui} from other libraries. I studied her
          code, and tried to understand the conversion. Then I took some time
          studying the internals of {chakraui}. The result is Choc UI.
        </Section.p>
      </Section.Content>
    </Section>
  );
};

export default Introduction;
