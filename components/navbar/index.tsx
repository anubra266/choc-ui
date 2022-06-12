import { ButtonGroup, Flex, Heading, chakra } from "@chakra-ui/react";
import Link from "next/link";
import { useViewportScroll } from "framer-motion";
import React from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { DocSearch } from "components/doc-search";

import { Logo } from "components/logo";
import { ActionButton } from "components/navbar/action-button";
import { ColorModeToggle } from "components/navbar/color-mode-toggle";
import SponsorButton from "components/navbar/sponsor-button";
import { CONSTANTS } from "components/utils/constants";

function Navbar() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.nav
      ref={ref}
      h="16"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="6"
      bg="layout.card"
      shadow={y > height ? "md" : undefined}
      sx={{
        "& > div": {
          flex: 1,
        },
      }}
    >
      <Flex>
        <Link href="/" passHref>
          <Flex as="a">
            <Logo boxSize="6" mr="2" />
            <Heading fontSize="xl" fontWeight="semibold">
              Choc UI
            </Heading>
          </Flex>
        </Link>
      </Flex>

      <Flex justify="center">
        <DocSearch w="sm" display={{ md: "flex" }} />
      </Flex>

      <Flex justify="right">
        <ButtonGroup alignItems="center">
          <ActionButton
            isLink
            href={CONSTANTS.CHOC_TWITTER}
            aria-label="Choc UI on twitter"
            icon={<FaTwitter />}
          />
          <ActionButton
            isLink
            href={CONSTANTS.CHOC_DISCORD}
            aria-label="Choc UI discord server"
            icon={<FaDiscord />}
          />
          <ActionButton
            isLink
            href={CONSTANTS.CHOC_GITHUB}
            aria-label="Choc UI's Github Repo"
            icon={<FaGithub />}
          />
          <ColorModeToggle />
          <SponsorButton />
        </ButtonGroup>
      </Flex>
    </chakra.nav>
  );
}

export default Navbar;
