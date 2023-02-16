import React from "react";
import clsx from "clsx";

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
