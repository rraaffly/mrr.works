import React from "react";
import PageHeader from "./page/PageHeader";
import PageFooter from "./page/PageFooter";

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <PageHeader />
      {props.children}
      <PageFooter />
    </>
  );
};

export default PageLayout;
