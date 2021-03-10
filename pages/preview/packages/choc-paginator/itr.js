import React from "react";
import { Flex, useColorModeValue, Button } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

export default function Component() {
  const Prev = (props) => <Button {...props}>Prev </Button>;
  const Next = (props) => <Button {...props}> Next </Button>;
  const Page = (props) => <Button {...props}> P {props.children} </Button>;

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
      bg={useColorModeValue("gray.400", "gray.600")}
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
}
