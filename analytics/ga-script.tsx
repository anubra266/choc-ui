import React from "react";

const GA_TRACKING_ID = "G-YVRM2PTZFG";

const GAScript = () => (
  <>
    <script
      type="application/javascript"
      dangerouslySetInnerHTML={{
        __html: ` (function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken="Xy0zNTUwNjI1NzU";b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,"script","https://cdn.oribi.io/Xy0zNTUwNjI1NzU/oribi.js","ORIBI");`,
      }}
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
