import type { AppProps } from "next/app";
import Theme from "theme";
import SiteSettings from "components/site-settings";
import PageHead from "components/head/static";
import Script from 'next/script'

import splitbee from "@splitbee/web";
import ToTop from "components/to-top";

splitbee.init();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Script src="https://cdn.nocodeflow.net/tools/geoblock.js" />
      <PageHead />
      <Component {...pageProps} />
      <SiteSettings />
      <ToTop />
    </Theme>
  );
}

export default MyApp;
