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
  Image,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

export default function Dsll() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="100%"
        px={{ base: 2, sm: 4 }}
        py={4}
        boxShadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
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
                borderRadius="sm"
                boxShadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button
                  w="100%"
                  variant="ghost"
                  href="#"
                  leftIcon={<AiFillHome />}
                >
                  Dashboard
                </Button>
                <Button
                  w="100%"
                  variant="solid"
                  colorScheme="brand"
                  href="#"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="100%"
                  variant="ghost"
                  href="#"
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
              <Image
                alt="logo"
                src="/logo.png"
                style={{ height: "30px", float: "left" }}
                mr={2}
              />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button
                variant="ghost"
                href="#"
                leftIcon={<AiFillHome />}
                size="sm"
              >
                Dashboard
              </Button>
              <Button
                variant="solid"
                colorScheme="brand"
                href="#"
                leftIcon={<AiOutlineInbox />}
                size="sm"
              >
                Inbox
              </Button>
              <Button
                variant="ghost"
                href="#"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none":"flex"}
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch />}
              />
              <Input type="tel" placeholder="Search..." />
            </InputGroup>

            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              borderRadius="sm"
              href="#"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
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
    </React.Fragment>
  );
}
