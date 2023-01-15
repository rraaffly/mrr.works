import React from "react";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <div id="app" className="relative flex flex-col flex-1">
      <PageHeader />
      {props.children}
      <PageFooter />
    </div>
  );
};

export default PageLayout;
