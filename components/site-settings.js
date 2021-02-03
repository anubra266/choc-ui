import { HomeLink } from "~/components/home-link";
import { CopyCode } from "~/components/copy-code";
import { ThemeToggle } from "~/components/theme-toggle";
import { useColorModeValue, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Ss() {
  const router = useRouter();
  const isPreview = router.pathname.includes("preview");
  const bg = useColorModeValue("white", "gray.700");
  return (
    isPreview && (
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
        bg={bg}
      >
        <CopyCode />
        <HomeLink />
        <ThemeToggle />
      </Stack>
    )
  );
}
