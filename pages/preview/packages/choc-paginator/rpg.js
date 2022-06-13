import React from "react";
import { Flex } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

const Choc = () => {
  return (
    <Flex
      w="full"
      bg={"gray.400"}
      _dark={{ bg: "gray.600" }}
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
};
export default Choc;
