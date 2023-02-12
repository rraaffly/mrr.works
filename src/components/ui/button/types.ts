export interface ButtonBaseProps {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  rounded?: boolean;
  block?: boolean;
}

export type ButtonLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
