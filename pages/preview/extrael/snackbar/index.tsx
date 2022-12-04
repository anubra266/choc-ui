import {
  Box,
  Button,
  HStack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
const SnackBarExample = () => {
  const scheme = "brand";
  const step1 = useColorModeValue("600", "300");
  const step2 = useColorModeValue("500", "400");
  const step3 = useColorModeValue("300", "500");
  const toast = useToast();
  const toastIdRef = React.useRef<string | number | null>();
  const closeSnackBar = () => toast.close(toastIdRef.current);
  const renderToast = () => {
    return (
      <Box mx=".5rem" color="white" p={3} bg="blue.500" minW="100%">
        <HStack justify="space-between">
          <Text>Custom Snackbar using toast</Text>
          <Button
            variant="outline"
            _active={{
              bg: "blue.600",
            }}
            _hover={{
              bg: "blue.600",
            }}
            onClick={closeSnackBar}
          >
            Close
          </Button>
        </HStack>
      </Box>
    );
  };

  const showToast = () => {
    toastIdRef.current = toast({
      position: "bottom",
      render: () => renderToast(),
      containerStyle: {
        width: "100%",
        minWidth: "100%",
        margin: "10px 10px",
      },
    });
  };
  return (
    <VStack
      justify="center"
      align="center"
      bg="gray.200"
      _dark={{ bg: "gray.600" }}
    >
      <Text my=".5rem">Click the button below</Text>
      <Button
        my=".5rem"
        bgColor={`${scheme}.${step1}`}
        _focus={{
          outline: "none",
        }}
        transition="background 0.8s"
        backgroundPosition="center"
        _hover={{
          bgColor: `${scheme}.${step2}`,
          bgGradient: `radial(circle, transparent 1%, ${scheme}.${step2} 1%)`,
          bgPos: "center",
          backgroundSize: "15000%",
        }}
        _active={{
          bgColor: `${scheme}.${step3}`,
          backgroundSize: "100%",
          transition: "background 0s",
        }}
        onClick={showToast}
        color="white"
      >
        Show Snackbar
      </Button>
    </VStack>
  );
};

export default SnackBarExample;
