import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import { Container } from "~/components/ui";
import clsx from "clsx";

const MainHeader = () => {
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 18) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-10 w-full transition-all duration-150 ease-in-out",
        isSticky && "backdrop-blur-md bg-white/60"
      )}
    >
      <Container className="py-3">
        <Navigation />
      </Container>
    </header>
  );
};

export default MainHeader;
