import React from "react";

import { useRouter } from "next/router";
import { Box } from "@chakra-ui/layout";
import Carbon from "react-carbon";

export const AdBox = (props: any) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Box
      sx={{
        "#carbonads *": {
          m: "initial",
          p: "initial",
        },
        "#carbonads": {
          display: "flex",
          maxW: "330px",
          shadow: "md",
          zIndex: 100,
          bg: "blackAlpha.300",
        },
        "#carbonads a": {
          color: "inherit",
          textDecoration: "none",
        },
        "#carbonads a:hover": {
          color: "inherit",
        },
        "#carbonads span": {
          pos: "relative",
          display: "block",
          overflow: "hidden",
        },
        "#carbonads .carbon-wrap": {
          display: "flex",
        },
        "#carbonads .carbon-img ": {
          display: "block",
          m: 0,
          lineHeight: 1,
        },
        "#carbonads .carbon-img img": {
          display: "block",
        },
        "#carbonads .carbon-text": {
          fontSize: "13px",
          p: "10px",
          mb: "16px",
          lineHeight: 1.5,
          textAlign: "left",
        },
        "#carbonads .carbon-poweredby": {
          display: "block",
          p: "6px 8px",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          fontWeight: 600,
          fontSize: "8px",
          lineHeight: 1,
          borderTopLeftRadius: "3px",
          pos: "absolute",
          bottom: 0,
          right: 0,
          bg: "brand.700",
          color: "white",
        },
      }}
    >
      <Carbon
        key={category || "showads"}
        name="carbon-ads"
        placement="choc-uitech"
        serve="CESDP23M"
      />
    </Box>
  );
};
