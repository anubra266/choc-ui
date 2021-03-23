import React from "react";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { chakra, Flex, IconButton } from "@chakra-ui/react";

export default function Component() {
  return (
    <Flex
      bg="gray.600"
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        isRound
        size="md"
        icon={
          <>
            <AiOutlineShoppingCart />
            <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              p="4px"
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              rounded="full"
            />
          </>
        }
      />

      <IconButton
        size="md"
        isRound
        variant="ghost"
        ml={8}
        icon={
          <>
            <AiOutlineMessage />
            <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              p="4px"
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              rounded="full"
            />
          </>
        }
      />
    </Flex>
  );
}
