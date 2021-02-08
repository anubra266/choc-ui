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
import DocSearch from "../doc-search";
import SidebarContent from "~/components/layouts/docs/sidebar-content";

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
              w="full"
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
                    <DocSearch w="full" />
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
