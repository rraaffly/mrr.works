import React from "react";
import clsx from "clsx";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bold?: boolean;
}

const Heading = ({
  children,
  className,
  as: HeadingElement = "h6",
  bold,
  ...props
}: HeadingProps) => {
  const isBold = bold && "font-bold";
  const isSize = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    h5: "text-xl",
    h6: "text-lg",
  };
  return (
    <HeadingElement
      className={clsx(isSize[HeadingElement], isBold, className)}
      {...props}
    >
      {children}
    </HeadingElement>
  );
};

export default Heading;
