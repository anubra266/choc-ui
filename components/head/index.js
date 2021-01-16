import React from "react";
import Static from "./static";
import Dynamic from "./dynamic";

const PageHead = (props) => {
  return (
    <div>
      <Static />
      <Dynamic title={props.title} />
    </div>
  );
};

export default PageHead;
