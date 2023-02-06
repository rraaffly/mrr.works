import React from "react";
import clsx from "clsx";
import NavigationList from "./NavigationList";

const data = [
  {
    menu: "home.",
    path: "/",
  },
  {
    menu: "about.",
    path: "/about",
  },
  {
    menu: "works.",
    path: "/works",
  },
  {
    menu: "blog.",
    path: "/blog",
  },
  {
    menu: "misc.",
    path: "/miscellaneous",
  },
];

const Navigation = ({ isOpen }) => {
  return (
    <nav className={clsx("w-full flex items-center", isOpen && "h-fit")}>
      <ul
        className={clsx(
          "w-full flex flex-col md:flex-row items-center justify-center md:justify-end transition-all duration-300",
          isOpen
            ? "absolute top-0 right-0 z-40 h-screen max-h-screen bg-white"
            : "-top-full -right-full h-0"
        )}
      >
        {data.map((value, index) => (
          <NavigationList
            key={index}
            path={value.path}
            menu={value.menu}
            className={clsx("gap-y-4", isOpen ? "" : "hidden md:block")}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
