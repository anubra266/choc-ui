import React from "react";
import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";

import { AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
const Ma = () => {
  return (
    <Flex
      bg="gray.600"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="100%"
        maxW="sm"
        mx="auto"
        px={4}
        py={3}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="md"
        borderRadius="md"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Courses and MOOCs
          </chakra.span>
          <chakra.span
            bg={useColorModeValue("brand.200", "brand.300")}
            color={useColorModeValue("brand.800", "brand.900")}
            px={3}
            py={1}
            borderRadius="full"
            textTransform="uppercase"
            fontSize="xs"
          >
            psychology
          </chakra.span>
        </Flex>

        <Box>
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color={useColorModeValue("gray.800", "white")}
          >
            AP® Psychology - Course 5: Health and Behavior
          </chakra.h1>
          <chakra.p
            fontSize="sm"
            mt={2}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            eligendi similique exercitationem optio libero vitae accusamus
            cupiditate laborum eos.
          </chakra.p>
        </Box>

        <Box>
          <Flex
            alignItems="center"
            mt={2}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <span>Visit on:</span>
            <chakra.a
              mx={2}
              cursor="pointer"
              textDecor="underline"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              edx.org
            </chakra.a>
            <span>or</span>
            <chakra.a
              mx={2}
              cursor="pointer"
              textDecor="underline"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              classcentral.com
            </chakra.a>
          </Flex>

          <Flex alignItems="center" justifyContent="center" mt={4}>
            <chakra.a
              mr={2}
              color={useColorModeValue("gray.800", "gray.400")}
              _hover={{ color: useColorModeValue("gray.700", "gray.300") }}
              cursor="pointer"
            >
              <AiOutlineTwitter />
            </chakra.a>

            <chakra.a
              mr={2}
              color={useColorModeValue("gray.800", "gray.400")}
              _hover={{ color: useColorModeValue("gray.700", "gray.300") }}
              cursor="pointer"
            >
              <AiOutlineLink />
            </chakra.a>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Ma;
