import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

const Choc = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
      >
        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            color="brand.500"
            _dark={{ color: "brand.400" }}
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </Flex>

        <chakra.h2
          color="gray.800"
          _dark={{ color: "white" }}
          fontSize={{ base: "2xl", md: "3xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          Design Tools
        </chakra.h2>

        <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.200" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
          <Link fontSize="xl" color="brand.500" _dark={{ color: "brand.300" }}>
            John Doe
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Choc;
