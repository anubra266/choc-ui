import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  usePrefersReducedMotion,
  keyframes,
  HStack,
  Stack,
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
      <Stack w="full" spacing={[4, , 8]}>
        {slides.map((slide, sid) => (
          <Box
            key={`slide-${sid}`}
            display={currentSlide === sid ? "block" : "none"}
            pos="relative"
            animation={slideAnimation}
            shadow="md"
          >
            <Text
              color="white"
              fontSize="xs"
              p="8px 12px"
              pos="absolute"
              top="0"
            >
              {sid + 1} / {slidesCount}
            </Text>
            <Image src={slide.img} boxSize="full" backgroundSize="cover" />
            <Text
              color="white"
              p="8px 12px"
              pos="absolute"
              bottom="8px"
              w="full"
              textAlign="center"
              fontSize="2xl"
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
        <HStack justify="center">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setCurrentSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Stack>
    </Flex>
  );
};
export default Component;
