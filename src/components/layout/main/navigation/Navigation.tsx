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
    <nav className="flex flex-col lg:flex-row bg-blue-200">
      <div className="flex items-center justify-between">
        <div className="w-full lg:w-64">
          <Link href="/">Logo</Link>
        </div>
        <button
          onClick={handleClick}
          className="lg:hidden inline-flex items-center justify-center w-7 h-7 text-lg"
        >
          {isOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>
      </div>
      <div
        className={clsx(
          "absolute top-0 flex w-full transition-all duration-300 ease-in-out md:static lg:justify-end",
          {
            "bg-red-500 right-0": isOpen,
            "bg-blue-500 -right-full": !isOpen,
          }
        )}
      >
        <NavigationList data={ListNavigationData} />
      </div>
    </nav>
  );
};

export default Navigation;
