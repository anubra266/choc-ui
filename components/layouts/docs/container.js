import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = (props) => (
    <Box
        w="full"
        pb="12"
        pt="3"
        mx="auto"
        maxW="75rem"
        px={{ base: "2", md: "6" }}
        {...props}
    />
);

export default Container;
