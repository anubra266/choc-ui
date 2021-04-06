import React, { useEffect } from "react";

const EthicalAds = () => (
  <>
    <script
      async
      src="https://media.ethicalads.io/media/client/ethicalads.min.js"
    ></script>
  </>
);

export default EthicalAds;

declare var window: any;
export const AdBox = (props: any) => {
  useEffect(() => {
    window.ethicalads.wait.then((_: any) => {
      console.log("Ads are loaded");
    });
  }, []);
  return (
    <div
      className="horizontal dark"
      data-ea-publisher="choc-ui-tech"
      data-ea-type="image"
      {...props}
    ></div>
  );
};
