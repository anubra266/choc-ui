import React from "react";

import {
  Box,
  Flex,
  Spacer,
  Tag,
  Stack,
  useColorModeValue,
  FlexProps,
  Text,
  chakra,
} from "@chakra-ui/react";

import { useRoutes } from "categories/parse-categories";
import Link from "next/link";
import { Link as SLink } from "react-scroll";
import SidebarSection from "./SidebarSection";

const RouteLink = ({ children, isSection, href, active }) => {
  return isSection || active ? children : <Link href={href}>{children}</Link>;
};
type MenuLink = {
  children: any;
  active?: boolean;
  isSection?: boolean;
  isComp?: boolean;
  activeSection?: any;
  section?: any;
  subSection?: any;
  href?: string;
};
export const MenuLink = ({
  children,
  active,
  isSection,
  isComp,
  activeSection,
  section,
  subSection,
  href,
  ...rest
}: MenuLink & FlexProps) => {
  const tColor = useColorModeValue("blackAlpha.700", "whiteAlpha.700");

  const activeColor = useColorModeValue("brand.800", "brand.200");
  const activeStyle = {
    color: activeColor,
    fontWeight: "semibold",
  };
  const sectionStyle: any = {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "xs",
    color: tColor,
  };
  const baseStyle: any = {
    color: tColor,
    _hover: {
      color: activeColor,
      transition: "all 0.3s ease-in-out",
    },
    cursor: !active && "pointer",
    textTransform: "capitalize",
    fontSize: "sm",
    fontWeight: "md",
  };
  const CLink = chakra(activeSection ? SLink : RouteLink, {});
  const SLinkProps = {
    to: activeSection,
    offset: -90,
    smooth: true,
    duration: 500,
    spy: true,
    hashSpy: true,
    activeClass: "active",
  };
  const RLinkProps = {
    active: active,
    href: href,
    isSection: isSection,
  };
  const hasAlert = !isSection && !isComp && section.alert;
  return (
    <Flex
      p={2}
      pl={8}
      mx={2}
      my={1}
      {...rest}
      alignItems="center"
      sx={{
        ".active .comp": {
          color: activeColor,
          transition: "all 0.3s ease-in-out",
        },
        ".active .compb": {
          borderLeftColor: useColorModeValue("brand.300", "brand.200"),
          boxShadow: `0 0 50px #fff`,
        },
      }}
    >
      <CLink {...(activeSection ? SLinkProps : RLinkProps)}>
        <Box
          {...(isSection ? sectionStyle : baseStyle)}
          {...(active && activeStyle)}
        >
          {children}
        </Box>
      </CLink>
      {(subSection || hasAlert) && <Spacer />}
      {hasAlert && (
        <Tag rounded="md" variant="subtle" colorScheme={section.alert.variant}>
          <span>{section.alert.message} </span>
        </Tag>
      )}
      {subSection}
    </Flex>
  );
};

export const CompLink = (props: any) => {
  const { component, activeSection } = props;
  return (
    <MenuLink
      active={component.active}
      href={component.url}
      activeSection={activeSection && component.preview}
      isComp
      ml={3}
      my={0}
      py={0}
    >
      <Flex alignItems="center" role="group">
        <Box
          py={2}
          borderLeftWidth="4px"
          borderColor={useColorModeValue("blackAlpha.400", "whiteAlpha.400")}
          _groupHover={{
            borderColor: useColorModeValue("brand.300", "brand.200"),
          }}
          h="full"
          className="compb"
        >
          &nbsp;
        </Box>
        <Box pl={2} py={2} className="comp">
          {component.name}
        </Box>
      </Flex>
    </MenuLink>
  );
};
const SidebarContent = () => {
  const routes = useRoutes();
  return (
    <Stack spacing={0}>
      {routes.map((category, cid) => (
        <Box pt={cid !== 0 && 5} key={cid}>
          <MenuLink isSection>{category.title}</MenuLink>
          {category.sections.map((section: any, sid: any) => {
            return <SidebarSection section={section} key={`section-${sid}`} />;
          })}
        </Box>
      ))}
    </Stack>
  );
};
export default SidebarContent;
