import React from "react";
import {
  useColorModeValue,
  Stack,
  Box,
  Flex,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { BsArrowReturnLeft } from "react-icons/bs";

const Result = (props) => {
  const resultsTextColor = useColorModeValue("gray.800", "gray.100");
  const resultsIconColor = useColorModeValue("gray.800", "gray.400");
  const resultsIconColorH = useColorModeValue("gray.800", "gray.100");
  return (
    <Flex
      mt={10}
      bg={useColorModeValue("", "gray.600")}
      _hover={{
        bg: useColorModeValue("", "brand.600"),
      }}
      role="group"
      px={4}
      py={3}
      mr={2}
      rounded="lg"
      cursor="pointer"
    >
      <Icon
        boxSize={5}
        my="auto"
        color={resultsIconColor}
        _groupHover={{ color: resultsIconColorH }}
      >
        <path
          d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4"
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinejoin="round"
        ></path>
      </Icon>
      <Stack dir="row" spacing={0} ml={5}>
        <Box textTransform="capitalize" color={resultsTextColor} fontSize="sm">
          {props.section}
        </Box>
        <Box
          fontWeight="bold"
          textTransform="capitalize"
          color={resultsTextColor}
        >
          {props.component}
        </Box>
      </Stack>
      <Spacer />
      <Icon
        my="auto"
        color={resultsIconColor}
        _groupHover={{ color: resultsIconColorH }}
        boxSize={5}
        as={BsArrowReturnLeft}
      />
    </Flex>
  );
};

export default Result;
