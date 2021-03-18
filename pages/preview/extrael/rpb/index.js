import React from "react";
import { Button, Stack, useColorModeValue } from "@chakra-ui/react";

export default function Component() {
  const scheme = "brand";
  const step1 = useColorModeValue("600", "300");
  const step2 = useColorModeValue("500", "400");
  const step3 = useColorModeValue("300", "500");

  const sizes = ["lg", "md", "sm", "xs"];
  return (
    <Stack
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      {sizes.map((size, k) => (
        <Button
          bgColor={`${scheme}.${step1}`}
          color="white"
          fontWeight="medium"
          rounded="md"
          shadow="base"
          size={size}
          _focus={{
            outline: "none",
          }}
          key={k}
          transition="background 0.8s"
          backgroundPosition="center"
          _hover={{
            bgColor: `${scheme}.${step2}`,
            bgGradient: `radial(circle, transparent 1%, ${scheme}.${step2} 1%)`,
            bgPos: "center",
            backgroundSize: "15000%",
          }}
          _active={{
            bgColor: `${scheme}.${step3}`,
            backgroundSize: "100%",
            transition: "background 0s",
          }}
        >
          Click Me
        </Button>
      ))}
    </Stack>
  );
}
