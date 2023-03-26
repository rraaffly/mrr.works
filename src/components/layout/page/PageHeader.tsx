import React from "react";
import { Navigation } from "~/components/navigation";
import { Container } from "~/components/ui";

const PageHeader = () => {
  return (
    <header id="landing-header" className="py-5">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default PageHeader;
