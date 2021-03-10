import React from "react";
import { IconButton, Icon, Link, Tooltip } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

export const HomeLink = () => {
  return (
    <Tooltip
      shouldWrapChildren
      hasArrow
      label="Go to Home"
      placement="left-start"
    >
      <Link href="/" isExternal>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Go to Home`}
          variant="ghost"
          colorScheme="brand"
          icon={<Icon as={MdHome} boxSize={6} />}
        />
      </Link>
    </Tooltip>
  );
};
