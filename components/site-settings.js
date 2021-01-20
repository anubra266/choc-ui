import { HomeLink } from "~/components/home-link";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Ss() {
  const router = useRouter();
  const isPreview = router.pathname.includes("preview");
  return (
    isPreview && (
      <Stack pos="fixed" right={0} bottom={5}>
        <HomeLink />
        <ThemeSwitcher />
      </Stack>
    )
  );
}
