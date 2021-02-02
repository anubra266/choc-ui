import React, { useImperativeHandle, forwardRef } from "react";
import {
  Flex,
  chakra,
  useColorModeValue,
  HStack,
  Kbd,
  Portal,
  Text,
  VisuallyHidden,
  useEventListener,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

function SearchModal(props, ref) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useImperativeHandle(ref, () => ({
    isOpen,
    onOpen,
    onClose,
  }));
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody pb={6}>
          <h1>Hi!</h1>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default forwardRef(SearchModal);
