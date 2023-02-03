import React, { useState } from "react";
import { List, X } from "phosphor-react";
import Navigation from "./navigation/Navigation";
import { Container, Link } from "~/components/ui";
import clsx from "clsx";

const MainHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const openNavigation = () => setOpen(!isOpen);
  return (
    <header className="fixed top-0 left-0 z-10 w-full">
      <Container className="py-3 flex flex-col md:flex-row">
        <div className="flex items-center justify-between">
          <div className="w-full h-7">
            <Link path="/">Logo</Link>
          </div>
          <button
            className={clsx(
              "md:hidden w-7 h-7 inline-flex items-center justify-center",
              isOpen && "absolute top-3 right-6 z-50"
            )}
            onClick={openNavigation}
          >
            {isOpen ? <X weight="bold" /> : <List weight="bold" />}
          </button>
        </div>
        <Navigation isOpen={isOpen} />
      </Container>
    </header>
  );
};

export default MainHeader;
