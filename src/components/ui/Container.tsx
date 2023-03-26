import React from "react";
import clsx from "clsx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={clsx("mx-auto w-full lg:w-9/12 px-6", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
export default Container;
