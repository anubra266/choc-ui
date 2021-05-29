import React from "react";
import {
  chakra,
  Flex,
  Icon,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

export default function Component() {
  const data = [
    { name: "Daggy", created: "7 days ago" },
    { name: "Anubra", created: "23 hours ago" },
    { name: "Josef", created: "A few seconds ago" },
    { name: "Sage", created: "A few hours ago" },
  ];
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: useColorModeValue("white", "gray.800") }}
        shadow="lg"
      >
        {data.map((token, tid) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={useColorModeValue("white", "gray.800")}
              key={tid}
            >
              {useBreakpointValue({ base: true, md: tid === 0 }) && (
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 4 }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg={useColorModeValue("gray.100", "gray.700")}
                  color={useColorModeValue("gray.500")}
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>Name</span>
                  <span>Created</span>
                  <span>Data</span>
                  <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
                </SimpleGrid>
              )}
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 4 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{token.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {token.created}
                </chakra.span>
                <Flex>
                  <Button
                    size="sm"
                    variant="solid"
                    leftIcon={<Icon as={AiTwotoneLock} />}
                    colorScheme="purple"
                  >
                    View Profile
                  </Button>
                </Flex>
                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                    />
                    <IconButton colorScheme="green" icon={<AiFillEdit />} />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                    />
                  </ButtonGroup>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
