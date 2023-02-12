import React from "react";
import { Link } from "~/components/ui";
import { IListNavigationProps } from "~/data/DataNavigation";

interface NavigationListProps {
  data: IListNavigationProps[];
}

const NavigationList = ({ data }: NavigationListProps) => {
  return (
    <ul className="flex flex-col lg:flex-row gap-x-2 text-center">
      {data.map((value, index) => (
        <li key={index} className="px-2 py-1.5">
          <Link
            href={value.path}
            className="text-3xl lg:text-base font-bold tracking-tighter"
          >
            {value.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
