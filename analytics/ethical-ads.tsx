import React, { useEffect } from "react";

declare var window: any;
import Router from "next/router";
const EthicalAds = () => {
  return (
    <script
      async
      src="https://media.ethicalads.io/media/client/ethicalads.min.js"
    ></script>
  );
};

export default EthicalAds;

export const AdBox = (props: any) => {
  const loadAds = () => {
    window.ethicalads.load();
  };
  useEffect(() => {
    loadAds();
  }, []);
  Router.events.on("routeChangeComplete", () => loadAds());
  return (
    <div
      className="horizontal dark"
      data-ea-publisher="choc-ui-tech"
      data-ea-type="image"
      {...props}
    ></div>
  );
};
