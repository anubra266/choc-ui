import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
  Box,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import {
  MobileNavButton,
  MobileNavContent,
} from "~/components/codes/headers/mobile-nav";
import Features from "@/headers/slce/features";
import { IoIosArrowDown } from "react-icons/io";

export default function Slol(props) {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const mobileNavBtnRef = React.useRef();
  return (
    <React.Fragment>
      <chakra.header bg={bg} w="100%" px={{ base: 2, sm: 4 }} py={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link display="flex" alignItems="center" href="/">
            <Image
              alt="logo"
              src="/logo.png"
              style={{ height: "50px", float: "left" }}
              mr={2}
            />
          </Link>
          <Box pos="relative" display={{ base: "none", md: "inline-flex" }}>
            <HStack spacing={1}>
              <Popover placement="bottom-start">
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
                <PopoverContent
                  bg={bg}
                  w="100vw"
                  maxW="md"
                  _focus={{ boxShadow: "md" }}
                >
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
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
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
          </Box>
        </Flex>
        <MobileNavContent
          noSponsor
          isOpen={mobileNav.isOpen}
          onClose={mobileNav.onClose}
        />
      </chakra.header>
    </React.Fragment>
  );
}
