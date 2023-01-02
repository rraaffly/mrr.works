import clsx from "clsx";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  as: HeadingElement,
  ...props
}) => {
  return (
    <HeadingElement className={clsx("", className)} {...props}>
      {children}
    </HeadingElement>
  );
};

export default Heading;
