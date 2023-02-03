import React from "react";

const MainContent = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default MainContent;
