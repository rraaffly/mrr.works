import React from "react";
import clsx from "clsx";

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full md:w-11/12 lg:w-10/12 px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
