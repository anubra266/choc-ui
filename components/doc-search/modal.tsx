import React, { useImperativeHandle, useState } from "react";
import type { UseDisclosureReturn } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  chakra,
  forwardRef,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import SearchResults from "./result-list";
import { handleSearch } from "./handleSearch";
import { processSearchResult } from "./processSearchResult";
import { useRouter } from "next/router";

export default forwardRef<
  { ref: React.MutableRefObject<UseDisclosureReturn | null> },
  "div"
>(function SearchModal(_, ref) {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useImperativeHandle(ref, () => ({
    isOpen,
    onOpen,
    onClose,
  }));

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const [search, setsearch] = React.useState("");
  const [searchResults, setsearchResults] = React.useState([]);

  const { totalSections, processedResult } = processSearchResult(searchResults);

  React.useEffect(() => {
    !isOpen && setsearch("");
  }, [isOpen]);

  React.useEffect(() => {
    isOpen && setsearchResults(handleSearch(search));
  }, [isOpen, search]);

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      const activeSectionItem: any = Object.values(processedResult)
        .flat()
        .find((item: any) => item.sectionIndex === activeSectionIndex);
      router.push(activeSectionItem.url);
      onClose();
    } else if (e.key === "ArrowUp") {
      if (activeSectionIndex === 0) {
        e.preventDefault();
        return;
      }
      setActiveSectionIndex((a) => a - 1);
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      if (activeSectionIndex === totalSections - 1) {
        return;
      }
      setActiveSectionIndex((a) => a + 1);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay backdropFilter="blur(2px)" />
      <ModalContent mt="5rem" bg="white" _dark={{ bg: "#111" }}>
        <ModalBody p={25}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="brand.400" boxSize={5} mr={5} />
            </InputLeftElement>
            <Input
              variant="flushed"
              placeholder="Search the collection..."
              size="lg"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              onKeyDown={onKeyDown}
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
          <SearchResults
            results={processedResult}
            close={onClose}
            activeSectionIndex={activeSectionIndex}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
