import { chakra, useColorModeValue } from "@chakra-ui/system";

export const Splitbee = () => {
  const splitbeeBadge = useColorModeValue("-dark", "");
  return (
    <chakra.a
      mt="20"
      display="flex"
      justifyContent="center"
      href="https://splitbee.io/?ref=badge"
    >
      <chakra.img
        src={`https://splitbee-cdn.fra1.cdn.digitaloceanspaces.com/static/badge/splitbee-badge${splitbeeBadge}.svg`}
        alt="Analytics by Splitbee.io"
      />
    </chakra.a>
  );
};
