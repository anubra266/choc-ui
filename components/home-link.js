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
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <React.Fragment>
      <Link href="/" isExternal>
        <IconButton
          borderRightRadius={0}
          borderLeftRadius="full"
          size="md"
          fontSize="lg"
          aria-label={`Home`}
          variant="solid"
          colorScheme="brand"
          ml={{ base: "0", md: "3" }}
          onClick={toggleMode}
          icon={<Icon as={MdHome} boxSize={6} />}
        />
      </Link>
    </React.Fragment>
  );
};
