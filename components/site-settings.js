import { HomeLink } from "~/components/home-link";
import { CopyCode } from "~/components/copy-code";
import { ThemeToggle } from "~/components/theme-toggle";
import { useColorModeValue, Stack } from "@chakra-ui/react";
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
      <Stack
        direction="column"
        pos="fixed"
        zIndex={1000}
        right={0}
        bottom={70}
        width={10}
        border="solid transparent"
        boxShadow="lg"
        borderLeftRadius="lg"
        bg={useColorModeValue("white", "gray.700")}
      >
        <CopyCode />
        <HomeLink />
        <ThemeToggle />
      </Stack>
    )
  );
}
