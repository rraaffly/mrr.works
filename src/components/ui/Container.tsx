import React from "react";
import clsx from "clsx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 lg:w-11/12 lg:px-8 xl:w-10/12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
