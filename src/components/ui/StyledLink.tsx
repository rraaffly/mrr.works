import Link from "next/link";
import React from "react";
import clsx from "clsx";

type StyledLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const StyledLink = React.forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Link
        href="/"
        className={clsx("text-limo font-medium hover:underline", className)}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

StyledLink.displayName = "StyledLink";
export default StyledLink;
