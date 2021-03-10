import React from "react";
import { Link as CLink } from "@chakra-ui/react";
import { linkStyle } from "components/docs";
import Link from "next/link";

export const me = (
  <CLink href="https://twitter.com/anubra266" target="_blank" {...linkStyle}>
    {" "}
    <i>Me</i>
  </CLink>
);

export const antd = (
  <CLink href="https://ant.design" target="_blank" {...linkStyle}>
    {" "}
    Ant Design
  </CLink>
);
export const chakraui = (
  <CLink href="https://chakra-ui.com" target="_blank" {...linkStyle}>
    {" "}
    Chakra UI
  </CLink>
);

export const gissue = (
  <CLink
    href="https://github.com/chakra-ui/chakra-ui/issues/2940"
    target="_blank"
    {...linkStyle}
  >
    {" "}
    Github Issue
  </CLink>
);

export const chrisham = (
  <CLink href="https://github.com/ChristineTham" target="_blank" {...linkStyle}>
    {" "}
    Christine Ham
  </CLink>
);

export const pagelayouts = (
  <React.Fragment>
    {" "}
    <Link href="" style={linkStyle}>
      Page Layouts
    </Link>{" "}
  </React.Fragment>
);

export const navbars = (
  <React.Fragment>
    {" "}
    <Link href="" style={linkStyle}>
      Navbars
    </Link>{" "}
  </React.Fragment>
);
export const sidebars = (
  <React.Fragment>
    {" "}
    <Link href="" style={linkStyle}>
      Sidebars
    </Link>{" "}
  </React.Fragment>
);
export const hoc = (
  <React.Fragment>
    {" "}
    <Link href="" style={linkStyle}>
      Molecular Components
    </Link>{" "}
  </React.Fragment>
);
