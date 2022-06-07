import { HomeLink } from "./home-link";
import { CopyCode } from "./copy-code";
import { ThemeToggle } from "./theme-toggle";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import { useLocation } from "@remix-run/react";
import type { LoaderData } from "~/routes/preview";

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

type PreviewOptionsProps = {
  data: LoaderData;
};

export function PreviewOptions(props: PreviewOptionsProps) {
  const location = useLocation();
  const isPreview = location.pathname.includes("preview");
  const bg = useColorModeValue("white", "gray.700");

  if (!isPreview && inIframe()) return null;

  return (
    <Stack
      direction="column"
      pos="fixed"
      zIndex={1000}
      right={0}
      bottom={70}
      w={10}
      border="solid transparent"
      shadow="lg"
      roundedLeft="lg"
      bg={bg}
    >
      <CopyCode code={props.data.code} />
      <HomeLink />
      <ThemeToggle />
    </Stack>
  );
}
