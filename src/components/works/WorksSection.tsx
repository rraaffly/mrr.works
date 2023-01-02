import React from "react";
import { Container, Heading } from "../ui";

const WorksSection = () => {
  return (
    <section id="works" className="py-20">
      <Container>
        <Heading
          as="h2"
          className="text-2xl md:text-4xl tracking-tight font-bold"
        >
          works
        </Heading>
      </Container>
    </section>
  );
};

export default WorksSection;
