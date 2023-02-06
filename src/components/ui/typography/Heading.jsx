import React from "react";
import clsx from "clsx";

const Heading = ({ text, className, as: HeadingElement, ...props }) => {
  const isStyled = {
    h1: "text-6xl",
    h2: "text-5xl",
    h3: "text-4xl",
    h4: "text-3xl",
    h5: "text-2xl",
    h6: "text-xl",
  };
  return (
    <HeadingElement
      className={clsx("", isStyled[HeadingElement], className)}
      {...props}
    >
      {text}
    </HeadingElement>
  );
};

Heading.defaultProps = {
  as: "h1",
  text: "Title",
};

export default Heading;
