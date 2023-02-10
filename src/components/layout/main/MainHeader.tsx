import React from "react";
import Navigation from "./navigation/Navigation";
import { Container } from "~/components/ui";

const MainHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <Container className="py-3">
        <Navigation />
      </Container>
    </header>
  );
};

export default MainHeader;
