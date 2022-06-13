import { Flex, Text, chakra } from "@chakra-ui/react";
import type { FlexProps } from "@chakra-ui/react";

import { useRoutes } from "components/utils/route-categories/parse-categories";
import { SidebarSection } from "components/sidebar/sidebar-section";

export const SidebarContent = (props: FlexProps) => {
  const routes = useRoutes();

  return (
    <Flex flexDir="column" {...props}>
      {routes.map((category, cid) => (
        <chakra.div key={category.title} pt={cid === 0 ? 0 : 5}>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="xs"
            mb="1"
          >
            {category.title}
          </Text>
          {category.sections.map((section: any) => (
            <SidebarSection section={section} key={section.title} />
          ))}
        </chakra.div>
      ))}
    </Flex>
  );
};
