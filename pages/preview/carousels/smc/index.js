import React from "react";
import {
  Box,
  Flex,
  Image,
  keyframes,
  useColorModeValue,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const Component = () => {
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

  const display = keyframes`
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
  `;
  const SLIDES_INTERVAL_TIME = 3;
  const prefersReducedMotion = usePrefersReducedMotion();
  const slideAnimation = prefersReducedMotion
    ? undefined
    : `${display} ${SLIDES_INTERVAL_TIME * slides.length}s infinite`;

  return (
    <Flex w="full" bg={useColorModeValue("gray.200", "gray.600")} p={10}>
      <Box w="full" h="400px" pos="relative" overflowX="hidden">
        {slides.map((slide, sid) => (
          <Box
            key={sid}
            animation={slideAnimation}
            opacity={0}
            shadow="md"
            sx={{
              animationDelay: sid !== 0 && `${sid * SLIDES_INTERVAL_TIME}s`,
            }}
            pos="absolute"
            top={0}
            boxSize="full"
          >
            <Image src={slide.img} boxSize="full" />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
export default Component;
