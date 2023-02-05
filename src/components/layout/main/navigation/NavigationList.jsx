import React from "react";
import clsx from "clsx";
import { Link } from "~/components/ui";

const NavigationList = ({ className, path, menu }) => {
  return (
    <li className={clsx("px-2.5", className)}>
      <Link path={path} className="block font-medium tracking-tight">
        {menu}
      </Link>
    </li>
  );
};

export default NavigationList;
