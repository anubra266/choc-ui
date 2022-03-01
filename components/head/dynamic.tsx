import React from "react";
import Head from "next/head";

const Dynamic = (props) => {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const description =
    "Choc UI is a set of accessible and reusable components that are commonly used in web applications.";
  return (
    <Head>
      <title>{capitalize(props.title)} | Choc UI</title>

      <meta name="title" content={`${capitalize(props.title)} | Choc UI`} />
      <meta name="description" content={props.description || description} />

      <meta
        property="og:title"
        content={`${capitalize(props.title)} | Choc UI`}
      />
      <meta
        property="twitter:title"
        content={`${capitalize(props.title)} | Choc UI`}
      />
      <meta
        property="og:description"
        content={props.description || description}
      />
      <meta
        property="twitter:description"
        content={props.description || description}
      />
      <meta
        property="og:image"
        content={
          `${process.env.siteUrl}/thumbnails/` + (props.image || "landing.png")
        }
      />
      <meta
        property="twitter:image"
        content={
          `${process.env.siteUrl}/thumbnails/` + (props.image || "landing.png")
        }
      />
    </Head>
  );
};

export default Dynamic;
