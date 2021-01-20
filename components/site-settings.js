import { HomeLink } from "~/components/home-link";
import { CopyCode } from "~/components/copy-code";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { Stack } from "@chakra-ui/react";
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
      <Stack pos="fixed" right={0} bottom={5}>
        <CopyCode />
        <HomeLink />
        <ThemeSwitcher />
      </Stack>
    )
  );
}
