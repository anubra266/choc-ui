import React from "react";
import { useColorModeValue, Stack, Box } from "@chakra-ui/react";

import Result from "./result";

function SearchResults({ results, close }) {
  return (
    <Stack mt={7} dir="row" maxH="xs" overflowY="auto">
      {Object.keys(results).map((category, cid) => {
        return (
          <React.Fragment key={cid}>
            <Box
              fontWeight="bold"
              textTransform="capitalize"
              color={useColorModeValue("gray.800", "gray.400")}
            >
              {category}
            </Box>
            {results[category].map(({ section, name, url }, sid) => {
              return (
                <Result
                  key={sid}
                  section={section}
                  component={name}
                  url={url}
                  onClick={close}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

export default SearchResults;
