import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
  styled?: boolean;
}

const Link: React.FC<LinkProps> = ({
  children,
  className,
  path,
  styled,
  ...props
}) => {
  const isStyled = styled && "font-medium hover:underline";
  return (
    <NextLink href={path} className={clsx(isStyled, className)} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
