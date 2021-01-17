import React from "react";

import { Box, Stack, useColorModeValue } from "@chakra-ui/react";

import routes from "./routes.json";
import jVar from "json-variables";
import Link from "next/link";
import { useRouter } from "next/router";

const routesParsed = jVar(routes, {
  heads: "{",
  tails: "}",
});
const RouteLink = ({ children, section, href }) => {
  return section ? children : <Link href={href}>{children}</Link>;
};
const MenuLink = ({ children, active, section, href }) => {
  const borderColor = useColorModeValue("brand.500", "gray.100");
  const activeStyle = {
    bg: useColorModeValue("brand.400", "gray.600"),
    color: "brand.50",
    boxShadow: "lg",
    borderRight: "3px solid",
  };
  const sectionStyle = {
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: "0.7rem",
  };
  const baseStyle = {
    borderColor: borderColor,
    _hover: activeStyle,
    cursor: "pointer",
    textTransform: "capitalize",
  };
  return (
    <RouteLink href={href} section={section}>
      <Box
        p={3}
        pl={8}
        {...(section ? sectionStyle : baseStyle)}
        {...(active && activeStyle)}
      >
        {children}
      </Box>
    </RouteLink>
  );
};

const SidebarContent = () => {
  const router = useRouter();
  return (
    <Stack spacing={0}>
      {routesParsed.sections.map((section, sid) => (
        <React.Fragment key={sid}>
          <MenuLink section>{section.title}</MenuLink>
          {section.routes.map((link, lid) => (
            <MenuLink
              key={lid}
              active={router.pathname === link.route}
              href={link.route}
            >
              {link.title}
            </MenuLink>
          ))}
        </React.Fragment>
      ))}
    </Stack>
  );
};
export default SidebarContent;
