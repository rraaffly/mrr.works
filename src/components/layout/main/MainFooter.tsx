import React from "react";
import { Container } from "~/components/ui";
import SocialMedia from "~/components/SocialMedia";

const MainFooter = () => {
  return (
    <footer className="py-2">
      <Container className="flex items-center justify-center lg:justify-end">
        <SocialMedia />
      </Container>
    </footer>
  );
};

export default MainFooter;
