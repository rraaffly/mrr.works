import React, { useState } from "react";
import { X, List } from "phosphor-react";
import { Link } from "~/components/ui";
import { ListNavigationData } from "~/data/DataNavigation";
import NavigationList from "./NavigationList";
import clsx from "clsx";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  return (
    <nav className="flex flex-col lg:flex-row">
      <div className="flex items-center justify-between">
        <div className="w-full lg:w-72 h-7 flex items-center justify-start">
          <Link href="/">Logo</Link>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className={clsx(
            "lg:hidden inline-flex items-center justify-center w-7 h-7",
            isOpen ? "absolute right-6 z-50" : "static"
          )}
        >
          {isOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>
      </div>

      <div
        className={clsx(
          "absolute top-0 z-40 w-full flex items-center justify-center transition-all duration-300 lg:static lg:h-fit lg:justify-end",
          {
            "left-0 h-screen bg-white/80 backdrop-blur-md": isOpen,
            "left-full h-screen": !isOpen,
          }
        )}
      >
        <NavigationList data={ListNavigationData} />
      </div>
    </nav>
  );
};

export default Navigation;
