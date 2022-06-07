import React from "react";
import { HStack, Icon, chakra, useToken } from "@chakra-ui/react";

const Choc = () => {
  const [red500, brand600] = useToken("colors", ["red.500", "brand.600"]);
  const gradient = (
    <chakra.svg w={0} h={0} pos="absolute" aria-hidden="true" focusable="false">
      <linearGradient id="gradient" x2="1" y2="1">
        <stop offset="0%" stopColor="#447799" />
        <stop offset="50%" stopColor={red500} />
        <stop offset="full" stopColor={brand600} />
      </linearGradient>
    </chakra.svg>
  );
  return (
    <HStack
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
      spacing={5}
    >
      {gradient}
      <Icon
        boxSize={16}
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient) #447799;"
      >
        <path
          fillRule="evenodd"
          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
          clipRule="evenodd"
        />{" "}
      </Icon>
      <Icon
        boxSize={16}
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient) #447799;"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </Icon>
      <Icon
        boxSize={16}
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient) #447799;"
      >
        <path
          fillRule="evenodd"
          d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
          clipRule="evenodd"
        />
      </Icon>
    </HStack>
  );
};

export default Choc;
