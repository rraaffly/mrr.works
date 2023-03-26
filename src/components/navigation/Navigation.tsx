import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import NavigationLogo from "./NavigationLogo";
import NavigationButton from "./NavigationButton";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const openNavigation = () => setOpen(!open);
  return (
    <nav className="flex flex-col lg:flex-row">
      <div className="flex items-center justify-between">
        <NavigationLogo />
        <NavigationButton setOpen={openNavigation} isOpen={open} />
      </div>
      <NavigationMenu />
    </nav>
  );
};

export default Navigation;
