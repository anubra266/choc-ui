import React from "react";
import Static from "./static";
import Dynamic from "./dynamic";

const PageHead = (props) => {
  return (
    <div>
      <Dynamic {...props} />
      <Static />
    </div>
  );
};

export default PageHead;
