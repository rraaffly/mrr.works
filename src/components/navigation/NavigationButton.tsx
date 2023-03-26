import React from "react";
import { IoMenu, IoClose } from "react-icons/io5";

interface Props {
  isOpen?: boolean;
  setOpen?: () => void;
}

const NavigationButton = ({ setOpen, isOpen }: Props) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={setOpen}
        className="w-7 h-7 inline-flex items-center justify-center"
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>
    </div>
  );
};

export default NavigationButton;
