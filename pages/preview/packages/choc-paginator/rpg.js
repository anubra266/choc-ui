import React from "react";
import { Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

export default function Component() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.400", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Pagination
        defaultCurrent={2}
        total={50}
        paginationProps={{ display: "flex", mb: 5 }}
        responsive
      /> 
      <Pagination
        defaultCurrent={9}
        total={500}
        paginationProps={{ display: "flex", mb: 5 }}
        pageNeighbours={1}
        showTotal={(total) => `${total} Items`}
        showSizeChanger
        showQuickJumper
        responsive={{ activePage: true }}
      />{" "}
      <Pagination
        defaultCurrent={9}
        total={500}
        paginationProps={{ display: "flex", mb: 5 }}
        pageNeighbours={1}
        showTotal={(total) => `${total} Items`}
        showSizeChanger
        showQuickJumper
        responsive={{ activePage: true, pageSize: true }}
      />
    </Flex>
  );
}
