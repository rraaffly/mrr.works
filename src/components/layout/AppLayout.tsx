import React from "react";

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <main
      id="app"
      className="flex flex-col w-full min-h-screen antialiased bg-background text-white"
    >
      {props.children}
    </main>
  );
};

export default AppLayout;
