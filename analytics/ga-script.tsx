import React from "react";

const GA_TRACKING_ID = "G-YVRM2PTZFG";

const GAScript = () => (
  <>
    <script
      data-ad-client="ca-pub-9858691647622096"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
      }}
    />
  </>
);

export default GAScript;
