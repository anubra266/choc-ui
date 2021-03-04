import React from "react";

import {
  Box,
  Flex,
  Spacer,
  Tag,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { useRoutes } from "~/categories/parse-categories.js";
import Link from "next/link";

const RouteLink = ({ children, isSection, href, active }) => {
  return isSection || active ? children : <Link href={href}>{children}</Link>;
};
const MenuLink = ({ children, active, isSection, section, href }) => {
  const borderColor = useColorModeValue("brand.500", "gray.100");
  const activeStyle = {
    bg: useColorModeValue("brand.200", "brand.600"),
    color: useColorModeValue("brand.800", "brand.100"),
    shadow: "base",
    rounded: "sm",
  };
  const sectionStyle = {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "xs",
  };
  const baseStyle = {
    mx: 2,
    borderColor: borderColor,
    _hover: {
      ...activeStyle,
      bg: !active && useColorModeValue("gray.100", "gray.700"),
      transition: "all 0.3s ease-in-out",
    },
    cursor: !active && "pointer",
    textTransform: "capitalize",
    fontSize: "sm",
    fontWeight: "semibold",
    border: "solid transparent",
    my: 1,
  };
  return (
    <RouteLink active={active} href={href} isSection={isSection}>
      <Flex
        p={2}
        pl={8}
        {...(isSection ? sectionStyle : baseStyle)}
        {...(active && activeStyle)}
      >
        {children} <Spacer />
        {!isSection && section.alert && (
          <Tag
            rounded="md"
            variant="subtle"
            colorScheme={section.alert.variant}
          >
            <span>{section.alert.message} </span>
          </Tag>
        )}
      </Flex>
    </RouteLink>
  );
};

const SidebarContent = () => {
  const routes = useRoutes();

  return (
    <Stack spacing={0}>
      {routes.map((category, cid) => (
        <Box pt={cid !== 0 && 5} key={cid}>
          <MenuLink isSection>{category.title}</MenuLink>
          {category.sections.map((section, sid) => (
            <MenuLink
              key={sid}
              active={section.active}
              href={section.url}
              section={section}
            >
              {section.title}
            </MenuLink>
          ))}
        </Box>
      ))}
    </Stack>
  );
};
export default SidebarContent;
