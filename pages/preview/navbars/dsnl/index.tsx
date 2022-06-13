import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Tabs,
  TabList,
  Tab,
  Spacer,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Choc = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Logo />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl">Settings</chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
              <Button
                variant="solid"
                colorScheme="brand"
                leftIcon={<AiOutlineInbox />}
                size="sm"
              >
                Inbox
              </Button>
              <Button
                variant="ghost"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button>
            </HStack>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: "inherit" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Basic
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Integrations
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Notifications
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Usage
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Billing
            </Tab>{" "}
            <Tab isDisabled py={4} m={0}>
              Advanced
            </Tab>
          </TabList>
        </Tabs>
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Choc;
