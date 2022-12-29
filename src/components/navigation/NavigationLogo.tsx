import React from "react";
import { Link, Logo } from "~/components/ui";

const NavigationLogo = () => {
  return (
    <div className="w-full lg:w-64">
      <Link path="/">
        <Logo />
      </Link>
    </div>
  );
};

export default NavigationLogo;
