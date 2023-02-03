import React from "react";

const AppLayout = ({ children }) => {
  return (
    <main
      id="app"
      className="flex flex-col w-full min-h-screen max-h-screen antialiased font-normal font-sans text-base"
    >
      {children}
    </main>
  );
};

export default AppLayout;
