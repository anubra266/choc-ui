import React from "react";
import { useColorModeValue, Stack, Box } from "@chakra-ui/react";

import Result from "./result";

function SearchResults() {
  return (
    <Stack mt={7} dir="row" maxH="xs" overflowY="auto">
      <Box
        fontWeight="bold"
        textTransform="capitalize"
        color={useColorModeValue("gray.800", "gray.400")}
      >
        Elements
      </Box>
      <Result section="alerts" component="success" />
      <Result section="alerts" component="info" />
      <Result section="alerts" component="warning" />
      <Result section="alerts" component="error" />
      <Result section="alerts" component="notification" />
    </Stack>
  );
}

export default SearchResults;
