import React, { useState } from "react";
import {
  Text,
  Box,
  useColorModeValue,
  Flex,
  usePrefersReducedMotion,
  keyframes,
} from "@chakra-ui/react";

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
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const slides = [
    {
      caption: "First Slide",
    },
    {
      caption: "Second Slide",
    },
    {
      caption: "Third Slide",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slidesCount - 1;
  const prevSlide = () => {
    setCurrentSlide((s) => (isFirstSlide ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (isLastSlide ? 0 : s + 1));
  };
  const fade = keyframes`
    from { opacity: .4 } 
    to { opacity: 1 }
  `;
  const prefersReducedMotion = usePrefersReducedMotion();
  const slideAnimation = prefersReducedMotion ? undefined : `${fade} 1.5s`;
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box w="full" h="fit-content">
        {slides.map((_, sid) => (
          <Box
            display={currentSlide === sid ? "block" : "none"}
            pos="relative"
            animation={slideAnimation}
            h="400px"
            bg={randomColor}
            shadow="base"
          >
            <Text
              bgGradient={`linear(to-l, ${randomColor()},${randomColor()}, ${randomColor()})`}
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              pos="absolute"
              top="50%"
              transform="translateY(-50%)"
              textAlign="center"
              w="full"
              sx={{
                WebkitTextStrokeColor: randomColor(),
                WebkitTextStrokeWidth: "1px",
              }}
            >
              Slide {sid + 1}
            </Text>
            <Text {...arrowStyles} left="0" onClick={prevSlide}>
              &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
              &#10095;
            </Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
export default Component;
