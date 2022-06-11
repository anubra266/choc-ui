import React, { forwardRef } from "react";
import { Flex, Button } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

const Choc = () => {
  const Prev = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Prev
    </Button>
  ));
  const Next = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Next
    </Button>
  ));
  const Page = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      P{props.children}
    </Button>
  ));

  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
    if (type === "page") {
      return Page;
    }
  };
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
        paginationProps={{ display: "flex", mb: 4 }}
        itemRender={itemRender}
      />
    </Flex>
  );
};
export default Choc;
