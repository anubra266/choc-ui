import {
  Collapse,
  Flex,
  IconButton,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { NavLink } from "@remix-run/react";

export type SidebarSectionProps = { section: any };

export const SidebarSection = (props: SidebarSectionProps) => {
  const { section } = props;
  const subComps = useDisclosure();

  return (
    <>
      <Flex align="center">
        <NavLink to={section.url}>
          {({ isActive }) => (
            <chakra.span
              display="block"
              py="2"
              fontSize="sm"
              textTransform="capitalize"
              _dark={{
                color: isActive ? "inherit" : "whiteAlpha.700",
              }}
              fontWeight={isActive ? "semibold" : "inherit"}
            >
              {section.title}
            </chakra.span>
          )}
        </NavLink>
        {!!section.components.length && (
          <IconButton
            icon={<HiChevronRight />}
            aria-label="Toggle Section"
            size="xs"
            isRound
            ml="auto"
            mr="2"
            variant="ghost"
            onClick={subComps.onToggle}
          />
        )}
      </Flex>
      <Collapse in={subComps.isOpen}>
        {section.components?.map((component: any, cid: any) => (
          <NavLink to={component.url} key={cid}>
            <chakra.span
              display="block"
              fontSize="sm"
              textTransform="capitalize"
              py="1"
              ml="2"
            >
              {component.name}
            </chakra.span>
          </NavLink>
        ))}
      </Collapse>
    </>
  );
};
