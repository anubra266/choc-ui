import { Link, chakra, useColorModeValue } from "@chakra-ui/react";

export const Splitbee = () => {
  const splitbeeBadge = useColorModeValue("", "-dark");
  return (
    <chakra.div mt="20" display="flex" justifyContent="center">
      <Link isExternal href="https://splitbee.io/?ref=badge">
        <chakra.img
          src={`https://splitbee-cdn.fra1.cdn.digitaloceanspaces.com/static/badge/splitbee-badge${splitbeeBadge}.svg`}
          alt="Analytics by Splitbee.io"
        />
      </Link>
    </chakra.div>
  );
};
