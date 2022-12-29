import React from "react";
import { Navigation } from "~/components/navigation";
import { Container } from "~/components/ui";

const PageHeader = () => {
  return (
    <header className="fixed top-0 left-0 z-30 w-full h-auto py-3.5">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default PageHeader;
