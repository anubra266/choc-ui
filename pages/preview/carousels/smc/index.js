import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
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
      img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    },
    {
      img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    },
    {
      img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
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
          <Flex
            display={currentSlide === sid ? "block" : "none"}
            pos="relative"
            animation={slideAnimation}
            h="400px"
            bg={randomColor}
          >
            <Text
              bgGradient="linear(to-l, gray.300,blue.500)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              pos="absolute"
              top="50%"
              transform="translateY(-50%)"
              textAlign="center"
              w="full"
            >
              Slide {sid + 1}
            </Text>
            <Text {...arrowStyles} left="0" onClick={prevSlide}>
              &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
              &#10095;
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};
export default Component;
