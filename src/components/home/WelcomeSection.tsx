import React from "react";
import { Container, Heading } from "../ui";

const WelcomeSection = () => {
  return (
    <section id="welcome" className="flex flex-1 items-center">
      <Container className="">
        <div className="flex flex-col">
          <Heading
            as="h6"
            className="text-center text-xl tracking-tight font-medium md:text-left"
          >
            👋 Hello!
          </Heading>
          <Heading
            as="h2"
            className="mt-1 text-center text-2xl tracking-tight font-bold md:text-left md:text-6xl"
          >
            Muhammad Rafly Rafsanjani
          </Heading>
          <Heading
            as="h5"
            className="mt-0.5 text-center text-xl tracking-tight font-semibold md:mt-2 md:text-left md:text-3xl"
          >
            Quality Assurance Software
          </Heading>
        </div>
      </Container>
    </section>
  );
};

export default WelcomeSection;
