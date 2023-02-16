import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  styled?: boolean;
}

const Link = ({
  children,
  className,
  href = "#",
  styled,
  ...props
}: CustomLinkProps) => {
  const isStyled =
    styled &&
    "hover:underline hover:decoration-dotted hover:underline-offset-2";
  return (
    <NextLink href={href} className={clsx(isStyled, className)} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
