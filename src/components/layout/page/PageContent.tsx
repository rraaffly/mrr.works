import React from "react";

const PageContent = (props: { children: React.ReactNode }) => {
  return <article>{props.children}</article>;
};

export default PageContent;
