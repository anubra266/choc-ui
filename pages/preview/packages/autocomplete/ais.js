import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Icon, InputGroup, InputRightElement } from "@chakra-ui/react";

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
        {({ isOpen }) => (
          <>
            <InputGroup>
              <AutoCompleteInput variant="filled" placeholder="Search..." />
              <InputRightElement>
                <Icon as={isOpen ? ChevronRightIcon : ChevronDownIcon} />
              </InputRightElement>
            </InputGroup>
            <AutoCompleteList>
              {options.map((option, oid) => (
                <AutoCompleteItem
                  key={`optio-${oid}`}
                  value={option}
                  textTransform="capitalize"
                  align="center"
                >
                  {option}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </>
        )}
      </AutoComplete>
    </Flex>
  );
};
export default Choc;
