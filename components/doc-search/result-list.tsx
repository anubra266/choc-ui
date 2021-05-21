import React from "react";
import { useColorModeValue, Stack, Box } from "@chakra-ui/react";

import Result from "./result";
import { StickyViewport, StickyBoundary, Sticky } from "@anubra266/stickyreact";

const Category = (props: any) => {
  const { results, close, category, activeSectionIndex } = props;

  return (
    <>
      <Sticky
        as={Box}
        fontWeight="bold"
        textTransform="capitalize"
        color={useColorModeValue("gray.800", "gray.400")}
        bg={useColorModeValue("white", "gray.700")}
        py={1}
      >
        {category}
      </Sticky>
      <Stack spacing={3} mt={3}>
        {results[category].map(({ section, name, url,sectionIndex }, sid: any) => {
          return (
            <Result
              key={sid}
              active ={activeSectionIndex === sectionIndex}
              section={section}
              component={name}
              url={url}
              onClick={close}
            />
          );
        })}
      </Stack>
    </>
  );
};
function SearchResults(props: any) {
  const { results } = props;
  return (
    <StickyViewport as={Stack} mt={7} dir="row" maxH="xs" overflowY="auto">
      {Object.keys(results).map((category, cid) => {
        return (
          <StickyBoundary as={Stack} key={`category-result-${cid}`}>
            <Category category={category} {...props} />
          </StickyBoundary>
        );
      })}
    </StickyViewport>
  );
}

export default SearchResults;
