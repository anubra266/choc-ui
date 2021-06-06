import { IconButton } from "@chakra-ui/button";
import { useBoolean } from "@chakra-ui/hooks";
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ToTop = () => {
  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });
  const getVisible = () =>
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  const [isVisible, setIsVisible] = useState(false);
  window.onscroll = () => setIsVisible(() => getVisible());
  useEffect(() => {
    setIsVisible(() => getVisible());
  }, []);
  return (
    <IconButton
      aria-label="Back to top"
      title="Back to top"
      icon={<FiArrowUp />}
      rounded="full"
      pos="fixed"
      bottom="30"
      right="4"
      colorScheme="brand"
      onClick={scrollToTop}
      visibility={isVisible ? "visible" : "hidden"}
    />
  );
};

export default ToTop;
