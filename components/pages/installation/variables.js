import React from "react";
import { Link as CLink } from "@chakra-ui/react";
import { linkStyle } from "~/components/docs";
import Link from "next/router";

export const antd = (
  <CLink href="https://ant.design" target="_blank" {...linkStyle}>
    {" "}
    Ant Design
  </CLink>
);
export const chakraui = (
  <article href="https://chakra-ui.com" target="_blank" {...linkStyle}>
    {" "}
    Chakra UI
  </article>
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

export const gissue = (
  <a
    href="https://github.com/chakra-ui/chakra-ui/issues/2940"
    target="_blank"
    {...linkStyle}
  >
    {" "}
    Github Issue
  </a>
);

export const chrisham = (
  <CLink href="https://github.com/ChristineTham" target="_blank" {...linkStyle}>
    {" "}
    Christine Ham
  </CLink>
);
