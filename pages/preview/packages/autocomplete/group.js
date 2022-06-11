import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteGroup,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

const Choc = () => {
  const fruits = ["Apple", "Grape", "Pawpaw"];
  const countries = ["Korea", "Nigeria", "India"];

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
          <AutoCompleteGroup title="Fruits" showDivider>
            {fruits.map((option, oid) => (
              <AutoCompleteItem
                key={`fruits-${oid}`}
                value={option}
                textTransform="capitalize"
              >
                {option}
              </AutoCompleteItem>
            ))}
          </AutoCompleteGroup>
          <AutoCompleteGroup title="countries" showDivider>
            {countries.map((option, oid) => (
              <AutoCompleteItem
                key={`countries-${oid}`}
                value={option}
                textTransform="capitalize"
              >
                {option}
              </AutoCompleteItem>
            ))}
          </AutoCompleteGroup>
        </AutoCompleteList>
      </AutoComplete>
    </Flex>
  );
};
export default Choc;
