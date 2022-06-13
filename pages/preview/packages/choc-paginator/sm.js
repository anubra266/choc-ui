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
      direction="column"
    >
      <Pagination
        defaultCurrent={2}
        total={50}
        paginationProps={{ display: "flex", mb: 4 }}
        simple
      />

      <Pagination
        defaultCurrent={2}
        total={50}
        paginationProps={{ display: "flex", mb: 4 }}
        simple
        disabled
      />
    </Flex>
  );
};
export default Choc;
