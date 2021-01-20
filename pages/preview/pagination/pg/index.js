import React from "react";
import {
  chakra,
  Text,
  useColorModeValue,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  HStack,
  Box,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

const PagButton = (props) => {
  const activeStyle = {
    bg: useColorModeValue("brand.600", "brand.500"),
    color: useColorModeValue("white", "gray.200"),
  };
  return (
    <chakra.a
      href="#"
      mx={1}
      px={4}
      py={2}
      borderRadius="md"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      {...(props.active && activeStyle)}
    >
      {props.children}
    </chakra.a>
  );
};
const MButton = (props) => {
  const DoubleArrow = props.left ? ArrowLeftIcon : ArrowRightIcon;
  const [hovered, setHovered] = React.useState(false);
  return (
    <chakra.a
      w={4}
      py={2}
      color={useColorModeValue("gray.700", "gray.200")}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      cursor="pointer"
      textAlign="center"
    >
      {hovered ? (
        <Icon
          as={DoubleArrow}
          boxSize={3}
          cursor="pointer"
          color={useColorModeValue("brand.800", "brand.700")}
        />
      ) : (
        <Icon
          as={HiDotsHorizontal}
          color={useColorModeValue("gray.100", "gray.200")}
          boxSize={4}
          opacity={0.5}
        />
      )}
    </chakra.a>
  );
};
const Ma = () => {
  return (
    <Box
      pos="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      bg="gray.600"
      p={20}
      width="auto"
      justifyContent="center"
      alignItems="center"
    >
      <HStack>
        <PagButton>
          <Icon
            as={IoIosArrowBack}
            color={useColorModeValue("gray.700", "gray.200")}
            boxSize={4}
          />
        </PagButton>
        <PagButton>1</PagButton>
        <PagButton active>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <MButton right />
        <PagButton>50</PagButton>
        <PagButton>
          <Icon
            as={IoIosArrowForward}
            color={useColorModeValue("gray.700", "gray.200")}
            boxSize={4}
          />
        </PagButton>
        <Menu>
          <MenuButton ml={1} as={Button} rightIcon={<ChevronDownIcon />}>
            10 / page
          </MenuButton>
          <MenuList>
            <MenuItem>20 / page</MenuItem>
            <MenuItem>30 / page</MenuItem>
            <MenuItem>40 / page</MenuItem>
            <MenuItem>50 / page</MenuItem>
          </MenuList>
        </Menu>
        <HStack>
          <Text wordBreak="unset">Go to:</Text>
          <Input width="50px" />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Ma;
