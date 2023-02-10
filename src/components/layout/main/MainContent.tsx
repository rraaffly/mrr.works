import React from "react";

const MainContent = (props: { children?: React.ReactNode }) => {
  return (
    <main id="main" className="flex flex-col flex-1">
      {props.children}
    </main>
  );
};

export default MainContent;
