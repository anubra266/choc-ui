import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  usePrefersReducedMotion,
  keyframes,
  Stack,
} from "@chakra-ui/react";

const Component = () => {
  const slides = [
    {
      img:
        "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img:
        "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img:
        "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      img:
        "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img:
        "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const slideRight = keyframes`
  from {
    transform: translateX(600px);
  }
  to {
    transform: translateX(0);
  } 
  `;
  const slideLeft = keyframes`
  from {
    transform: translateX(-600px);
  }
  to {
    transform: translateX(0);
  } 
  `;

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "left";

  const toLeft = ANIMATION_DIRECTION.toLowerCase() === "left";

  const slide = toLeft ? slideLeft : slideRight;
  const prefersReducedMotion = usePrefersReducedMotion();
  const slideAnimation = prefersReducedMotion ? undefined : `${slide} 0.7s`;

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, []);

  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Stack w="full" spacing={[4, , 8]}>
        <Box pos="relative" h="400px" overflowX="hidden">
          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid}`}
              pos="absolute"
              display={currentSlide === sid ? "block" : "none"}
              top={0}
              boxSize="full"
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
            </Box>
          ))}
        </Box>
      </Stack>
    </Flex>
  );
};
export default Component;
