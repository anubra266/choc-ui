import React from "react";
import {
  IconButton,
  useColorMode,
  Icon,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

export const HomeLink = () => {
  return (
    <React.Fragment>
      <Link href="/" isExternal>
        <IconButton
          size="md"
          fontSize="lg"
          p={4}
          aria-label={`Go to Home`}
          variant="ghost"
          colorScheme="brand"
          ml={{ base: "0", md: "3" }}
          icon={<Icon as={MdHome} boxSize={6} />}
        />
      </Link>
    </React.Fragment>
  );
};
