import React from "react";
import { Heading } from "./typography";

const SectionTitle = ({ children }) => {
  return (
    <Heading as="h2" className="">
      {children}
    </Heading>
  );
};

export default SectionTitle;
