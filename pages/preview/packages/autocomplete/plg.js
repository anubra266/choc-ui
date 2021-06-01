import React from "react";
import { Flex, useColorModeValue, VStack } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export default function Component() {
  const options = ["apple", "appoint", "zap", "cap", "japan"];

  return (
    <Flex
      boxSize="full"
      h="100vh"
      pos="absolute"
      bg={useColorModeValue("gray.400", "gray.600")}
      p={30}
      justifyContent="center"
    >
      <VStack>
        <AutoComplete rollNavigation>
          <AutoCompleteInput
            variant="filled"
            placeholder="Search..."
            autoFocus
          />
          <AutoCompleteList>
            {options.map((option, oid) => (
              <AutoCompleteItem
                key={`option-${oid}`}
                value={option}
                textTransform="capitalize"
              >
                {option}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </VStack>
    </Flex>
  );
}
