import clsx from "clsx";
import React from "react";

const MainContent = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <main id="main" className={clsx("flex flex-col flex-1", props.className)}>
      {props.children}
    </main>
  );
};

export default MainContent;
