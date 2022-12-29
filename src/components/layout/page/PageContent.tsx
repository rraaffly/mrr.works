import React from "react";

const PageContent = (props: { children: React.ReactNode }) => {
  return (
    <main id="content" className="flex flex-col flex-1">
      {props.children}
    </main>
  );
};

export default PageContent;
