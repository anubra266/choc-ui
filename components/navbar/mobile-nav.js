import {
  Box,
  Center,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useUpdateEffect,
  Image,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useElementScroll } from "framer-motion";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RemoveScroll } from "react-remove-scroll";
import SponsorButton from "./sponsor-button";
import SidebarContent from "./sponsor-button";

function NavLink({ href, children }) {
  const isActive = href === route().current();

  return (
    <a href={href}>
      <Center
        flex="1"
        minH="40px"
        as="button"
        rounded="md"
        transition="0.2s all"
        fontWeight={isActive ? "semibold" : "medium"}
        bg={isActive ? "teal.400" : undefined}
        borderWidth={isActive ? undefined : "1px"}
        color={isActive ? "white" : undefined}
        _hover={{
          bg: isActive
            ? "teal.500"
            : useColorModeValue("gray.100", "whiteAlpha.100"),
        }}
      >
        {children}
      </Center>
    </a>
  );
}

export function MobileNavContent(props) {
  const { isOpen, onClose } = props;
  const closeBtnRef = React.useRef();

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    }
  }, [isOpen]);

  const [shadow, setShadow] = React.useState();

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              direction="column"
              w="100%"
              bg={useColorModeValue("white", "gray.800")}
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex={20}
              pb="8"
            >
              <Box>
                <Flex justify="space-between" px="6" pt="5" pb="4">
                  <Image
                    alt="logo"
                    src="/logo.png"
                    style={{
                      height: "50px",
                      float: "left",
                    }}
                    mr={2}
                  />
                  <HStack spacing="5">
                    <SponsorButton display="flex" />
                    <CloseButton ref={closeBtnRef} onClick={onClose} />
                  </HStack>
                </Flex>
              </Box>

              <ScrollView
                onScroll={(scrolled) => {
                  setShadow(scrolled ? "md" : undefined);
                }}
              >
                <SidebarContent />
              </ScrollView>
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}

const ScrollView = (props) => {
  const { onScroll, ...rest } = props;
  const [y, setY] = React.useState(0);
  const elRef = React.useRef();
  const { scrollY } = useElementScroll(elRef);
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useUpdateEffect(() => {
    onScroll?.(y > 5 ? true : false);
  }, [y]);

  return (
    <Box
      ref={elRef}
      flex="1"
      id="routes"
      overflow="auto"
      px="6"
      pb="6"
      {...rest}
    />
  );
};

export const MobileNavButton = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      display={{ base: "flex", md: "none" }}
      aria-label="Open menu"
      fontSize="20px"
      color={useColorModeValue("gray.800", "inherit")}
      variant="ghost"
      icon={<AiOutlineMenu />}
      {...props}
    />
  );
});
