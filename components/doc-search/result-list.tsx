import React from "react";
import { Box, Stack } from "@chakra-ui/react";

import Result from "./result";
import { Sticky, StickyBoundary, StickyViewport } from "@anubra266/stickyreact";
import type { Dict } from "@zag-js/core/dist/types";

const Category = (props: any) => {
  const { results, close, category, activeSectionIndex } = props;

  return (
    <>
      <Sticky
        as={Box}
        fontWeight="bold"
        textTransform="capitalize"
        color="choc.bg"
        bg="white"
        _dark={{
          color: "gray.400",
          bg: "blackAlpha.100",
        }}
        py={1}
      >
        {category}
      </Sticky>
      <Stack spacing={3} mt={3}>
        {results[category].map(
          ({ section, name, url, sectionIndex }: Dict, sid: any) => {
            return (
              <Result
                key={sid}
                active={activeSectionIndex === sectionIndex}
                section={section}
                component={name}
                url={url}
                onClick={close}
              />
            );
          }
        )}
      </Stack>
    </>
  );
};
function SearchResults(props: any) {
  const { results } = props;
  return (
    <StickyViewport as={Stack} mt={7} dir="row" maxH="md" overflowY="auto">
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
