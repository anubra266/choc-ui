import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

const Choc = () => {
  const [current, setCurrent] = React.useState(3);
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
       bg="gray.400"
      _dark={{ bg: "gray.600" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Pagination
        defaultCurrent={2}
        total={50}
        paginationProps={{ display: "flex" }}
        current={current}
        onChange={(page) => setCurrent(page)}
      />
    </Flex>
  );
}
