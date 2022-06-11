import React from "react";
import { Flex } from "@chakra-ui/react";
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
      <AutoComplete rollNavigation>
        <AutoCompleteInput variant="filled" placeholder="Search..." autoFocus />
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
    </Flex>
  );
};
export default Choc;
