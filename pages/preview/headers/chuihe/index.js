import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
  Image,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import {
  MobileNavButton,
  MobileNavContent,
} from "~/components/codes/headers/mobile-nav";
import SponsorButton from "~/components/codes/headers/sponsor-button";

const ChakraUIHeader = () => {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const mobileNavBtnRef = React.useRef();

  useUpdateEffect(() => {
    mobileNavBtnRef.current && mobileNavBtnRef.current.focus();
  }, [mobileNav.isOpen]);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

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
        position="absolute"
        zIndex="1"
        bg={bg}
        left="0"
        right="0"
        borderTop="6px solid"
        borderTopColor="brand.400"
        width="full"
      >
        <chakra.div height="4.5rem" mx="auto" maxW="1200px">
          <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
            <Flex align="center">
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

            <Flex
              justify="flex-end"
              w="100%"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Link
                  isExternal
                  aria-label="Go to Chakra UI GitHub page"
                  href={"https://github.com/anubra266/choc-ui"}
                >
                  <Icon
                    as={AiFillGithub}
                    display="block"
                    transition="color 0.2s"
                    w="5"
                    h="5"
                    _hover={{ color: "gray.600" }}
                  />
                </Link>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <SponsorButton ml="5" />
              <MobileNavButton
                ref={mobileNavBtnRef}
                aria-label="Open Menu"
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          <MobileNavContent
            isOpen={mobileNav.isOpen}
            onClose={mobileNav.onClose}
          />
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
};

export default ChakraUIHeader;
