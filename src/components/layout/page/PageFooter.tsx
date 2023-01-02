import React from "react";
import { Container, Link, Text } from "~/components/ui";

const PageFooter = () => {
  return (
    <footer className="py-5">
      <Container className="flex items-center justify-center">
        <Text as="span" className="tracking-tight text-xs md:text-sm">
          Build with{" "}
          <Link path="/" styled>
            Next.js
          </Link>
        </Text>
      </Container>
    </footer>
  );
};

export default PageFooter;
