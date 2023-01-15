import React from "react";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div
      id="root"
      className="flex flex-col w-full min-h-screen antialiased text-base"
    >
      {props.children}
    </div>
  );
};

export default Layout;
