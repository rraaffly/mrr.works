import React, { useState } from "react";
import { X, List } from "phosphor-react";
import { Button } from "~/components/ui";
import { dataNavigationMenu } from "~/data/dataNavigation";
import NavigationLogo from "./NavigationLogo";
import NavigationMenu from "./NavigationMenu";
import clsx from "clsx";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  return (
    <nav className="flex flex-col lg:flex-row">
      <div className="flex items-center justify-between">
        <NavigationLogo />
        <Button
          className={clsx(
            "w-7 h-7 lg:hidden",
            isOpen && "absolute z-50 right-6"
          )}
          onClick={handleClick}
        >
          {isOpen ? <X weight="bold" /> : <List weight="bold" />}
        </Button>
      </div>
      <NavigationMenu data={dataNavigationMenu} open={isOpen} />
    </nav>
  );
};

export default Navigation;
