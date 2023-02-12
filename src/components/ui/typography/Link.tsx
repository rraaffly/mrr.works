import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  styled?: boolean;
  newTab?: boolean;
}

const Link = ({
  children,
  className,
  href = "#",
  styled,
  newTab,
  ...props
}: CustomLinkProps) => {
  const isStyled =
    styled &&
    "hover:underline hover:decoration-dotted hover:underline-offset-2";
  return (
    <NextLink
      href={href}
      className={clsx(isStyled, className)}
      target={newTab && "_blank"}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
