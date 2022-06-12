import { hierarchy, Pack } from "@visx/hierarchy";
import { ParentSize } from "@visx/responsive";
import { Box, chakra, Tooltip } from "@chakra-ui/react";
import React from "react";

export const SponsorPack = ({ sponsors }) => {
  const root = React.useMemo(() => {
    const pack = {
      children: sponsors,
      name: "root",
      radius: 0,
      distance: 0,
    };

    return hierarchy(pack)
      .sum((d: any) => d?.cost * d?.cost)
      .sort((a: any, b: any) => b.data.cost - a.data.cost);
  }, [sponsors]);
  return (
    <ParentSize>
      {({ width }) => {
        return width < 10 ? null : (
          <Box
            w={width}
            h={width}
            pos="relative"
            sx={{
              ".spon-link": {
                transition: "all .2s ease",
                transform: "translate(-50%, -50%)",
              },
              ".spon-link:hover": {
                zIndex: 10,
                transform: "translate(-50%, -50%) scale(1.1)",
              },
            }}
          >
            <Pack root={root} size={[width, width]} padding={width * 0.1}>
              {(packData) => {
                const circles = packData.descendants().slice(1); // skip first layer
                return (
                  <div>
                    {[...circles].reverse().map((circle: any, i) => {
                      const tooltipX = circle.x > width / 2 ? "start" : "end";
                      const tooltipY = circle.y > width / 2 ? "top" : "bottom";
                      const placement: any = `${tooltipY}-${tooltipX}`;
                      return (
                        <Tooltip
                          hasArrow
                          label={`${circle.data.name}- $${circle.data.cost} (USD) / month`}
                          placement={placement}
                          _dark={{
                            "&, .chakra-tooltip__arrow": {
                              bg: "blackAlpha.500 !important",
                              color: "white",
                            },
                          }}
                          key={`circle-${i}`}
                        >
                          <chakra.a
                            href={circle.data.href}
                            zIndex="0"
                            rounded="full"
                            pos="absolute"
                            aria-label={circle.data.name}
                            bg="blackAlpha.50"
                            _dark={{
                              bg: "blackAlpha.200",
                              _hover: {
                                shadow: "dark-lg",
                              },
                            }}
                            shadow="base"
                            className="spon-link"
                            left={circle.x}
                            top={circle.y}
                            width={circle.r * 2}
                            height={circle.r * 2}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Box
                              key={`circle-${i}`}
                              pos="absolute"
                              bgRepeat="no-repeat"
                              bgPos="center"
                              bgSize="contain"
                              rounded="sm"
                              left="50%"
                              top="50%"
                              transform="translate(-50%, -50%)"
                              width={circle.data.cost > 100 ? "80%" : "50%"}
                              height={circle.data.cost > 100 ? "80%" : "50%"}
                              backgroundImage={`url(${circle.data.imageUrl})`}
                            />
                          </chakra.a>
                        </Tooltip>
                      );
                    })}
                  </div>
                );
              }}
            </Pack>
          </Box>
        );
      }}
    </ParentSize>
  );
};
