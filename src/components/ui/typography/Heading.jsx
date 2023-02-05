import React from "react";

const Heading = ({ children, className, as }) => {
  return <div>{children}</div>;
};

Heading.defaultProps = {
  as: "",
};

export default Heading;
