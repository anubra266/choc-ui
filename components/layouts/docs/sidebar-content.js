import React from "react";

import {
  chakra,
  Flex,
  Spacer,
  Badge,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

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
const MenuLink = ({ children, active, section, href, link }) => {
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
    border: "solid transparent",
  };
  return (
    <RouteLink href={href} section={section}>
      <Flex
        p={2}
        pl={8}
        {...(section ? sectionStyle : baseStyle)}
        {...(active && activeStyle)}
      >
        {children} <Spacer />
        {!section && link.alert && (
          <Badge rounded="lg" px={2} colorScheme={link.alert.variant}>
            {link.alert.message}
          </Badge>
        )}
      </Flex>
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
              link={link}
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
