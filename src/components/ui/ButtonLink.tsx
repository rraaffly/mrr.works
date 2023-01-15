import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className,
  path,
  ...props
}) => {
  return (
    <Link href={path} className={clsx("", className)} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
