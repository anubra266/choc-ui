import React from "react";
import Static from "./static";
import Dynamic from "./dynamic";

const PageHead = (props) => {
  return (
    <div>
      <Dynamic title={props.title} />
      <Static />
    </div>
  );
};

export default PageHead;
