import React from "react";

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <div
      id="root"
      className="flex flex-col w-full min-h-screen font-normal text-base"
    >
      {props.children}
    </div>
  );
};

export default AppLayout;
