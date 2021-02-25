import React from "react";
import { Text, Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Component = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slider = React.useRef();
  const slides = 5;

  const moveSlider = (x) => {
    slider.current.scrollBy(x, 0);
  };
  const movePrev = (l) => {
    const isFirstSlide = l === 0;
    if (isFirstSlide) {
      moveSlider(slider.current.clientWidth * slides);
    } else {
      moveSlider(-slider.current.clientWidth * slides);
    }
  };

  const moveNext = (l) => {
    const isLastSlide = slides === l + 1;
    if (isLastSlide) {
      moveSlider(-slider.current.clientWidth * l);
    } else {
      moveSlider(slider.current.clientWidth);
    }
  };

  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
        <Flex
          overflowX="scroll"
          overflowY="hidden"
          sx={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
          }}
          h={400}
          w="full"
          ref={slider}
        >
          {Array.from({ length: slides }, (_, sid) => (
            <Box
              key={sid}
              p="1rem"
              minW="full"
              w="full"
              h="full"
              sx={{
                scrollSnapAlign: "start",
              }}
              textAlign="center"
              pos="relative"
              bg={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            >
              <Text
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%,-50%)"
                fontSize="3xl"
                fontWeight="bold"
                fontFamily="fantasy"
              >
                Section {sid + 1}
              </Text>
              <Text {...arrowStyles} left={0} onClick={() => movePrev(sid)}>
                &#10094;
              </Text>
              <Text
                {...arrowStyles}
                right={0}
                borderRadius="3px 0 0 3px"
                onClick={() => moveNext(sid)}
              >
                &#10095;
              </Text>
            </Box>
          ))}
        </Flex>
    </Flex>
  );
};
export default Component;
