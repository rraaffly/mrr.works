import React from "react";
import SocialMedia from "~/components/SocialMedia";
import { Container } from "~/components/ui";

const MainFooter = () => {
  return (
    <footer className="py-3">
      <Container className="flex items-center justify-center lg:justify-end">
        <SocialMedia />
      </Container>
    </footer>
  );
};

export default MainFooter;
