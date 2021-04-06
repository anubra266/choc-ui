import React from "react";

const EthicalAds = () => (
  <>
    <script
      async
      src="https://media.ethicalads.io/media/client/ethicalads.min.js"
    ></script>
  </>
);

export default EthicalAds;

export const AdBox = () => (
  <div className="horizontal dark" data-ea-publisher="choc-ui-tech" data-ea-type="image"></div>
);
