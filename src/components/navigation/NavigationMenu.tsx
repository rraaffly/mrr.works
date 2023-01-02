import React from "react";
import clsx from "clsx";
import { Link } from "../ui";

interface Props {
  data: MenuItemProps[];
  open?: boolean;
}

interface MenuItemProps {
  menu: string;
  path: string;
}

const NavigationMenu: React.FC<Props> = ({ data, open }) => {
  const isOpen = open
    ? "right-0 bg-white/30 backdrop-blur-md"
    : "-right-full bg-transparent";
  return (
    <ul
      className={clsx(
        "absolute top-0 w-full h-screen flex flex-col items-center justify-center gap-5 transition-all duration-300 lg:static lg:h-max lg:flex-row lg:justify-end",
        isOpen
      )}
    >
      {data.map((value, index) => (
        <li key={index}>
          <Link
            path={value.path}
            className="text-lg lg:text-base font-bold tracking-tight"
          >
            {value.menu}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
