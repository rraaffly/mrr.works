import React from "react";
import { Container } from "~/components/ui";
import Navigation from "./navigation/Navigation";

const MainHeader = () => {
  return (
    <header className="relative">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default MainHeader;
