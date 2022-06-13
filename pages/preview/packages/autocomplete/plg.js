import React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

const Choc = () => {
  const options = ["apple", "appoint", "zap", "cap", "japan"];

  return (
    <Flex
      boxSize="full"
      h="100vh"
      pos="absolute"
      bg={"gray.400"}
      _dark={{ bg: "gray.600" }}
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
};
export default Choc;
