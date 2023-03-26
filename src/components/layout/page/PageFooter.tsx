import React from "react";
import { Container, StyledLink } from "~/components/ui";

const PageFooter = () => {
  return (
    <footer id="landing-footer" className="py-2">
      <Container className="flex items-center justify-center py-4">
        <span className="text-sm">
          <StyledLink href="/">MRR Works</StyledLink>
        </span>
      </Container>
    </footer>
  );
};

export default PageFooter;
