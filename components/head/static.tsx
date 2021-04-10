import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Static = () => {
  const router = useRouter();
  const isPreview = router.pathname.includes("preview");
  return (
    <Head>
      {isPreview && (
        <>
          <title>Component Preview | Choc UI</title>

          <meta name="title" content="Component Preview | Choc UI" />

          <meta
            name="description"
            content="Preview beautiful components from Choc UI"
          />

          <meta property="og:title" content="Component Preview | Choc UI" />
          <meta
            property="og:description"
            content="Preview beautiful components from Choc UI"
          />
          <meta property="og:image" content="/thumbnails/landing.png" />
        </>
      )}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />

      <meta name="application-name" content="Choc UI" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Choc UI" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#666db3" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#666db3" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@anubra266" />
      <meta name="twitter:site" content="@anubra266"></meta>

      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.siteUrl} />
      <meta property="og:site_name" content="Choc UI" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};

export default Static;
