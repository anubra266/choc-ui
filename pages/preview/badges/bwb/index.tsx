import React from "react";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { Flex, IconButton, chakra } from "@chakra-ui/react";

const Choc = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        aria-label="label"
        isRound
        size="md"
        icon={
          <>
            <AiOutlineShoppingCart />
            <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              rounded="full"
            >
              99
            </chakra.span>
          </>
        }
      />

      <IconButton
        aria-label="label"
        size="md"
        isRound
        ml={8}
        icon={
          <>
            <AiOutlineMessage />
            <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              rounded="full"
            >
              99
            </chakra.span>
          </>
        }
      />
    </Flex>
  );
};

export default Choc;
