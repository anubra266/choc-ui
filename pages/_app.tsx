import type { AppProps } from "next/app";
import Theme from "theme";
import SiteSettings from "components/site-settings";
import PageHead from "components/head/static";

import splitbee from "@splitbee/web";
import ToTop from "components/to-top";

import Script from "next/script";

splitbee.init();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <PageHead />
      <Component {...pageProps} />
      <SiteSettings />
      <ToTop />
      <Script src="https://app.embed.im/snow.jss" strategy="afterInteractive" />
    </Theme>
  );
}

export default MyApp;
