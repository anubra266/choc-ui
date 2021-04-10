import React from "react";

import {
  Box,
  Flex,
  Spacer,
  Tag,
  Stack,
  useColorModeValue,
  FlexProps,
  BoxProps,
  Text,
  Icon,
  IconButton,
  chakra,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";

import { useRoutes } from "categories/parse-categories";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link as SLink } from "react-scroll";

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
const MenuLink = ({
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
  const CLink = activeSection ? SLink : RouteLink;
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
          borderLeftColor: useColorModeValue("brand.300", "brand.200"),
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <Text
        as={CLink}
        active={active}
        href={href}
        isSection={isSection}
        to={activeSection}
        offset={-90}
        smooth={true}
        duration={500}
        spy={true}
        hashSpy={true}
        activeClass="active"
      >
        <Text
          {...(isSection ? sectionStyle : baseStyle)}
          {...(active && activeStyle)}
        >
          {children}
        </Text>
      </Text>
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

const CompLink = (props: any) => {
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
      <Box
        pl={2}
        py={2}
        borderLeftWidth="3px"
        borderColor={useColorModeValue("blackAlpha.400", "whiteAlpha.400")}
        _hover={{
          borderColor: useColorModeValue("brand.300", "brand.200"),
        }}
        className="comp"
      >
        {component.name}
      </Box>
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
            const subComps = useDisclosure({defaultIsOpen:section.active});
            return (
              <>
                <MenuLink
                  key={sid}
                  active={section.active}
                  href={section.url}
                  section={section}
                  subSection={
                    section.components.length > 0 && (
                      <IconButton
                        size="xs"
                        isRound
                        variant="ghost"
                        aria-label={`${section.title} Components`}
                        icon={
                          <Icon
                            as={
                              subComps.isOpen
                                ? ChevronDownIcon
                                : ChevronRightIcon
                            }
                          />
                        }
                        ml={2}
                        onClick={subComps.onToggle}
                        _focus={{ shadow: "none" }}
                      />
                    )
                  }
                >
                  {section.title}
                </MenuLink>
                <Collapse in={subComps.isOpen}>
                  {section.components?.map((component: any, cid: any) => (
                    <CompLink
                      key={`comp-${cid}`}
                      component={component}
                      activeSection={section.active}
                    />
                  ))}
                </Collapse>
              </>
            );
          })}
        </Box>
      ))}
    </Stack>
  );
};
export default SidebarContent;
