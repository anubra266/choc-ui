import React from "react";
import Navbar from "components/navbar";

const Site = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};
export default Site;
