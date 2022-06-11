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
};
export default Choc;
