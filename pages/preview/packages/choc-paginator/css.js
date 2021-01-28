import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

export default function Component() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.400", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Pagination
        defaultCurrent={2}
        total={50}
        paginationProps={{ display: "flex" }}
        baseStyles={{ bg: "green.600" }}
        activeStyles={{ bg: "blue.900" }}
        hoverStyles={{ bg: "green.300" }}
      />
    </Flex>
  );
}
