import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Link,
  Button,
  useUpdateEffect,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";

import {
  MobileNavButton,
  MobileNavContent,
} from "~/components/codes/headers/mobile-nav";

import Features from "@/headers/slce/features";

const HeaderContent = () => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const mobileNavBtnRef = React.useRef();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);
  return (
    <React.Fragment>
      <Flex
        w="100%"
        h="100%"
        px="6"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="flex-start">
          <Link href="/">
            <HStack>
              <Image
                alt="logo"
                src="/logo.png"
                style={{ height: "50px", float: "left" }}
                mr={2}
              />
            </HStack>
          </Link>
        </Flex>
        <Flex>
          <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <Popover>
              <PopoverTrigger>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                  rightIcon={<IoIosArrowDown />}
                >
                  Features
                </Button>
              </PopoverTrigger>
              <PopoverContent w="100vw" maxW="md" _focus={{ boxShadow: "md" }}>
                <Features />
              </PopoverContent>
            </Popover>
            <Button
              bg={bg}
              color="gray.500"
              display="inline-flex"
              alignItems="center"
              fontSize="md"
              _hover={{ color: cl }}
              _focus={{ boxShadow: "none" }}
            >
              Blog
            </Button>
            <Button
              bg={bg}
              color="gray.500"
              display="inline-flex"
              alignItems="center"
              fontSize="md"
              _hover={{ color: cl }}
              _focus={{ boxShadow: "none" }}
            >
              Pricing
            </Button>
          </HStack>
        </Flex>
        <Flex justify="flex-end" align="center" color="gray.400">
          <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <Button colorScheme="brand" variant="ghost" size="sm">
              Sign in
            </Button>
            <Button colorScheme="brand" variant="solid" size="sm">
              Sign up
            </Button>
          </HStack>
          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label="Open Menu"
            onClick={mobileNav.onOpen}
          />
        </Flex>
      </Flex>
      <MobileNavContent
        noSponsor
        isOpen={mobileNav.isOpen}
        onClose={mobileNav.onClose}
      />
    </React.Fragment>
  );
};

export default function Header(props) {
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        top="0"
        position={props && !props.demo && "fixed"}
        zIndex="1"
        bg={bg}
        left="0"
        right="0"
        borderTop="6px solid"
        borderTopColor="brand.400"
        width="full"
      >
        <chakra.div height="4.5rem" mx="auto" maxW="1200px">
          <HeaderContent />
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
