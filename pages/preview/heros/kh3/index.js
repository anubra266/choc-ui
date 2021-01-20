import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";

const backgroundOpacity = (bg, opacity) => ({
  _after: {
    bg: bg,
    opacity: opacity,
    pos: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    content: '" "',
  },
});
const KuttyHero = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      class="bg-opacity-25"
      {...backgroundOpacity("brand.500", 0.25)}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        py={24}
      >
        <Badge
          color="white"
          px={3}
          py={1}
          mb={3}
          variant="solid"
          colorScheme="brand"
          borderRadius="full"
        >
          Pre Beta
        </Badge>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
        >
          Great customer relationships start here.
        </chakra.h1>
        <chakra.form w="100%" mb={6}>
          <VisuallyHidden>Your Email</VisuallyHidden>
          <Box display={{ base: "block", lg: "none" }}>
            <Input
              size="lg"
              color="brand.900"
              type="email"
              placeholder="Enter your email..."
              bg="white"
              required="true"
            />
            <Button
              w="100%"
              mt={2}
              color="white"
              variant="solid"
              colorScheme="brand"
              size="lg"
              type="submit"
            >
              Get Started
            </Button>
          </Box>
          <InputGroup size="lg" w="100%" display={{ base: "none", lg: "flex" }}>
            <Input
              size="lg"
              color="brand.900"
              type="email"
              placeholder="Enter your email..."
              bg="white"
              required="true"
            />
            <InputRightElement width="auto">
              <Button
                color="white"
                variant="solid"
                colorScheme="brand"
                size="lg"
                type="submit"
                borderLeftRadius={0}
              >
                Get Started
              </Button>
            </InputRightElement>
          </InputGroup>
        </chakra.form>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="sm"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </chakra.p>
      </Flex>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="3 women looking at a laptop"
          objectFit="cover"
          w="100%"
          h={{ base: 64, md: "100%" }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
};

export default KuttyHero;
