import React from "react";

const Dynamic = (props) => {
  return (
    <React.Fragment>
      <title>Choc UI - {props.title}</title>

      <meta name="title" content={`Choc UI - ${props.title}`} />
      <meta name="description" content={`${props.title}`} />

      <meta property="og:title" content={`Choc UI - ${props.title}`} />
      <meta property="og:description" content={`${props.title}`} />

      <meta property="twitter:title" content={`Choc UI - ${props.title}`} />
      <meta property="twitter:description" content={`${props.title}`} />
    </React.Fragment>
  );
};

export default Dynamic;
