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
        "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      img:
        "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
