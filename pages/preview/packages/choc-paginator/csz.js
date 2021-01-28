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
      direction="column"
    >
      <Pagination
        defaultCurrent={9}
        total={500}
        paginationProps={{ display: "flex", mb: 4 }}
        pageNeighbours={1}
        size="xs"
      />

      <Pagination
        defaultCurrent={9}
        total={500}
        paginationProps={{ display: "flex", mb: 4 }}
        pageNeighbours={1}
        size="sm"
      />


      <Pagination
        defaultCurrent={9}
        total={500}
        paginationProps={{ display: "flex", mb: 4 }}
        pageNeighbours={1}
        size="md"
      />

      <Pagination
        defaultCurrent={9}
        total={500}
        paginationProps={{ display: "flex", mb: 4 }}
        pageNeighbours={1}
        size="lg"
      />
    </Flex>
  );
}
