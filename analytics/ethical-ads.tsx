import React, { useEffect } from "react";
declare var window: any;

const EthicalAds = () => {
  useEffect(() => {
    window.ethicalads.wait.then((placements: any) => {
      // console.log("placements", placements);
    });
  }, []);
  return (
    <>
      <script
        async
        src="https://media.ethicalads.io/media/client/ethicalads.min.js"
      ></script>
    </>
  );
};

export default EthicalAds;

export const AdBox = (props: any) => {
  return (
    <div
      className="horizontal dark"
      data-ea-publisher="choc-ui-tech"
      data-ea-type="image"
      {...props}
    ></div>
  );
};
