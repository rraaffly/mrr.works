import React from "react";
import clsx from "clsx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx("mx-auto w-full px-6 lg:w-10/12 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
