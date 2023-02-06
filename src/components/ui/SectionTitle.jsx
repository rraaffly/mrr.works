import React from "react";
import clsx from "clsx";
import { Heading } from "./typography";

const SectionTitle = ({ text, className }) => {
  return (
    <Heading
      as="h3"
      className={clsx("font-bold tracking-tighter", className)}
      text={text}
    />
  );
};

SectionTitle.defaultProps = {
  text: "Section Title",
};

export default SectionTitle;
