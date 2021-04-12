import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Icon, IconButton, useDisclosure, Collapse } from "@chakra-ui/react";
import { MenuLink, CompLink } from "./sidebar-content";
import { scroller, Element } from "react-scroll";

const SidebarSection = (props: any) => {
  const { section } = props;
  const subComps = useDisclosure();
  useEffect(() => {
    section.active ? subComps.onOpen() : subComps.onClose();
  }, [section]);
  const { section: activeSection } = useRouter().query;
  useEffect(() => {
    scroller.scrollTo(`nav-${activeSection}`, {
      duration: 500,
      delay: 100,
      smooth: true,
      containerId: "sidebar",
      hashSpy: false,
      offset: -10,
    });
  }, []);

  return (
    <>
      <MenuLink
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
                  as={subComps.isOpen ? ChevronDownIcon : ChevronRightIcon}
                />
              }
              ml={2}
              onClick={subComps.onToggle}
              _focus={{ shadow: "none" }}
            />
          )
        }
      >
        <Element name={`nav-${section.route}`}> {section.title} </Element>
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
};

export default SidebarSection;
