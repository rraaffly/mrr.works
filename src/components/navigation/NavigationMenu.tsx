import React from "react";

const NavigationMenu = () => {
  return (
    <div className="w-full flex items-center justify-start lg:justify-end">
      <ul className="flex flex-col lg:flex-row gap-x-4 gap-y-2">
        <li>home</li>
        <li>works</li>
        <li>article</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
