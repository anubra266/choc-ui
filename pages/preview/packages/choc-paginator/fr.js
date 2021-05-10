import React from "react";
import { Flex, useColorModeValue, useToken } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

export default function Component() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.400", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Pagination
        defaultCurrent={1}
        total={50}
        paginationProps={{ display: "flex", mb: 4 }}
        focusRing
      />

      <Pagination
        defaultCurrent={4}
        total={50}
        paginationProps={{ display: "flex", mb: 4 }}
        focusRing={useToken("colors", ["brand.400"])[0]}
      />
    </Flex>
  );
}
