import React, { useImperativeHandle, forwardRef } from "react";
import {
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import SearchResults from "./result-list";
import { handleSearch } from "./handleSearch";

function SearchModal(_, ref) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useImperativeHandle(ref, () => ({
    isOpen,
    onOpen,
    onClose,
  }));

  const [search, setsearch] = React.useState("");
  const [searchResults, setsearchResults] = React.useState();

  React.useEffect(() => {
    !isOpen && setsearch("");
  }, [isOpen]);

  React.useEffect(() => {
    isOpen && setsearchResults(handleSearch(search));
  }, [isOpen, search]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInTop"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent mt="5rem">
        <ModalBody p={25}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="brand.400" boxSize={5} mr={5} />}
            />
            <Input
              variant="flushed"
              placeholder="Search the collection.."
              size="lg"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <InputRightElement>
              <Kbd
                color="gray.500"
                rounded="2px"
                cursor="pointer"
                onClick={onClose}
              >
                <chakra.div
                  as="abbr"
                  title={"Close search"}
                  textDecoration="none !important"
                >
                  esc
                </chakra.div>
              </Kbd>
            </InputRightElement>
          </InputGroup>
          <SearchResults results={searchResults} close={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default forwardRef(SearchModal);
