import React from "react";
import { Flex, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import PillPity from "pill-pity";

const Choc = () => {
  const patterns = [
    "jigsaw",
    "overcast",
    "formal-invitation",
    "topography",
    "texture",
    "jupiter",
    "architect",
    "cutout",
    "hideout",
    "graph-paper",
    "yyy",
    "squares",
    "falling-triangles",
    "piano-man",
    "pie-factory",
    "dominos",
    "hexagons",
    "charlie-brown",
    "autumn",
    "temple",
    "stamp-collection",
    "death-star",
    "church-on-sunday",
    "i-like-food",
    "overlapping-hexagons",
    "four-point-stars",
    "bamboo",
    "bathroom-floor",
    "cork-screw",
    "happy-intersection",
    "kiwi",
    "lips",
    "lisbon",
    "random-shapes",
    "steel-beams",
    "tiny-checkers",
    "x-equals",
    "anchors-away",
    "bevel-circle",
    "brick-wall",
    "fancy-rectangles",
    "heavy-rain",
    "overlapping-circles",
    "plus",
    "rounded-plus-connected",
    "volcano-lamp",
    "wiggle",
    "bubbles",
    "cage",
    "connections",
    "current",
    "diagonal-stripes",
    "flipped-diamonds",
    "floating-cogs",
    "glamorous",
    "houndstooth",
    "leaf",
    "lines-in-motion",
    "moroccan",
    "morphing-diamonds",
    "rails",
    "rain",
    "skulls",
    "squares-in-squares",
    "stripes",
    "tic-tac-toe",
    "zig-zag",
    "aztec",
    "bank-note",
    "boxes",
    "circles-squares",
    "circuit-board",
    "curtain",
    "diagonal-lines",
    "endless-clouds",
    "eyes",
    "floor-tile",
    "groovy",
    "intersecting-circles",
    "melt",
    "overlapping-diamonds",
    "parkay-floor",
    "pixel-dots",
    "polka-dots",
    "signal",
    "slanted-stars",
    "wallpaper",
  ];
  const patterFill = useColorModeValue("brand.200", "brand.300");

  return (
    <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px" w="full" p="6">
      {patterns.map((pattern, pid) => (
        <PillPity
          key={pid}
          pattern={pattern}
          as={Flex}
          align="center"
          justify="center"
          fontWeight="bold"
          boxSize="200px"
          patternFill={patterFill}
          bgColor="choc.secondary"
          patternOpacity={0.3}
        >
          {pattern}
        </PillPity>
      ))}
    </SimpleGrid>
  );
};

export default Choc;
