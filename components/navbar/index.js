import React from "react";
import {
  chakra,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
  Image,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaMoon, FaSun, FaDiscord, FaGithub } from "react-icons/fa";
import SponsorButton from "./sponsor-button";
import { MobileNavButton, MobileNavContent } from "./mobile-nav";
import Link from "next/link";

const HeaderContent = () => {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const mobileNavBtnRef = React.useRef();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);
  return (
    <React.Fragment>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center" w="full">
          <Link href="/">
            <React.Fragment>
              <Image
                alt="logo"
                src="/logo.png"
                style={{ height: "30px", float: "left" }}
                mr={2}
              />
              <chakra.h1
                fontSize="1.3rem"
                fontFamily="heading"
                fontWeight="bold"
                style={{ float: "right" }}
              >
                <chakra.span
                  color="brand.400"
                  textShadow="2px 0 currentColor"
                  letterSpacing="widest"
                >
                  {" "}
                  Choc
                </chakra.span>{" "}
                UI
              </chakra.h1>
            </React.Fragment>
          </Link>
        </Flex>

        <Flex
          justify="flex-end"
          w="100%"
          maxW="824px"
          align="center"
          color="gray.400"
        >
          <HStack display="flex">
            <IconButton
              as="a"
              href={"https://discord.gg/XcD8bNv7Ne"}
              target="_blank"
              size="md"
              fontSize="lg"
              aria-label="Choc UI Discord server"
              variant="ghost"
              color="current"
              icon={<FaDiscord />}
            />
            <IconButton
              as="a"
              href={process.env.githubUrl}
              target="_blank"
              size="md"
              fontSize="lg"
              aria-label="Choc UI's Github Repo"
              variant="ghost"
              color="current"
              icon={<FaGithub />}
            />
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </HStack>
          <SponsorButton ml="5" />
          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label="Open Menu"
            onClick={mobileNav.onOpen}
          />
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </React.Fragment>
  );
};

const Header = (props) => {
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "lg" : undefined}
      transition="box-shadow 0.5s ease-in-out"
      pos="fixed"
      top="0"
      zIndex="1"
      bg={bg}
      left="0"
      right="0"
      borderTop="6px solid"
      borderTopColor="brand.400"
      borderBottom="1px solid"
      borderBottomColor={useColorModeValue("gray.200", "gray.900")}
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;
