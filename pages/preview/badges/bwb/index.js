import React from "react";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { chakra, Icon, Flex, Center, Box } from "@chakra-ui/react";

export default function Component() {
  return (
    <Flex
      bg="gray.600"
      p={20}
      width="100%"
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
              top={0}
              right={0}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              borderRadius="full"
            >
              99
            </chakra.span>
          </>
        }
      />

      <IconButton
        size="md"
        isRound
        ml={8}
        icon={
          <>
            <AiOutlineMessage />
            <chakra.span
              pos="absolute"
              top={0}
              right={0}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              borderRadius="full"
            >
              6
            </chakra.span>
          </>
        }
      />
    </Flex>
  );
}
