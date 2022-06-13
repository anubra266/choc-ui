import React from "react";
import { chakra, Flex, Icon } from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Choc = () => {
  const PagButton = (props) => {
    const activeStyle = {
      bg: "brand.600",
      _dark: { bg: "brand.500" },
      color: "white",
    };
    return (
      <chakra.button
        mx={1}
        px={4}
        py={2}
        rounded="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        color="gray.700"
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </chakra.button>
    );
  };
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <PagButton>
          <Icon
            as={IoIosArrowBack}
            color="gray.700"
            _dark={{ color: "gray.200" }}
            boxSize={4}
          />
        </PagButton>
        <PagButton>1</PagButton>
        <PagButton active>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>
          <Icon
            as={IoIosArrowForward}
            color="gray.700"
            _dark={{ color: "gray.200" }}
            boxSize={4}
          />
        </PagButton>
      </Flex>
    </Flex>
  );
};

export default Choc;
