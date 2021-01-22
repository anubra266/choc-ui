import { HomeLink } from "~/components/home-link";
import { CopyCode } from "~/components/copy-code";
import { ThemeToggle } from "~/components/theme-toggle";
import { Stack,Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export default function Ss() {
  const router = useRouter();
  const isPreview = router.pathname.includes("preview");
  return (
    isPreview &&
    !inIframe() && (
      <Flex direction="column" pos="fixed" right={0} bottom={5}>
        <CopyCode />
        <HomeLink />
        <ThemeToggle />
      </Flex>
    )
  );
}
