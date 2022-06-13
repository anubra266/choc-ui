import React from "react";
import { Flex, useToken } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

const Choc = () => {
  const focusRing = useToken("colors", ["brand.400"])[0];
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
        defaultCurrent={1}
        total={50}
        paginationProps={{ display: "flex", mb: 4 }}
        focusRing
      />

      <Pagination
        defaultCurrent={4}
        total={50}
        paginationProps={{ display: "flex", mb: 4 }}
        focusRing={focusRing}
      />
    </Flex>
  );
};
export default Choc;
