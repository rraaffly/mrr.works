import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { ButtonLinkProps } from "./types";
import {
  ButtonBaseStyle,
  ButtonBlockStyle,
  ButtonRoundedStyle,
  ButtonSizeStyle,
  ButtonVariantStyle,
} from "./styles";

const ButtonLink = ({
  children,
  className,
  size = "md",
  variant = "solid",
  rounded,
  block,
  ...props
}: ButtonLinkProps) => {
  return (
    <NextLink
      href="/"
      className={clsx(
        ButtonBaseStyle,
        ButtonSizeStyle[size],
        ButtonVariantStyle[variant],
        ButtonBlockStyle(block),
        ButtonRoundedStyle(rounded),
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default ButtonLink;
