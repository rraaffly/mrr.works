import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

const Link = ({ children, className, path, styled, ...props }) => {
  const isStyled = styled
    ? "font-medium hover:underline hover:decoration-1"
    : "";
  return (
    <NextLink href={path} className={clsx(isStyled, className)} {...props}>
      {children}
    </NextLink>
  );
};

Link.defaultProps = {
  path: "#",
  styled: false,
};

export default Link;
