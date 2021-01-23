import React from "react";

import { chakra, Box, Stack, useColorModeValue } from "@chakra-ui/react";

import routes from "~/routes.json";
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
    bg: useColorModeValue("brand.100", "gray.700"),
    color: useColorModeValue("brand.600", "brand.100"),
    boxShadow: "lg",
    borderRight: "3px solid",
  };
  const sectionStyle = {
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: "xs",
  };
  const baseStyle = {
    borderColor: borderColor,
    _hover: activeStyle,
    cursor: "pointer",
    textTransform: "capitalize",
    fontSize: "sm",
    fontWeight: "bold",
    border:"solid transparent"
  };
  return (
    <RouteLink href={href} section={section}>
      <Box
        p={2}
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
        <chakra.div pt={sid !== 0 && 5} key={sid}>
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
        </chakra.div>
      ))}
    </Stack>
  );
};
export default SidebarContent;
