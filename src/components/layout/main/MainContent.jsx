import clsx from "clsx";
import React from "react";

const MainContent = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex flex-col flex-1", className)} {...props}>
      {children}
    </div>
  );
};

export default MainContent;
