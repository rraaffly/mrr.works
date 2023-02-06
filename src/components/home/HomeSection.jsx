import React from "react";
import { Container, Heading } from "../ui";

const HomeSection = () => {
  return (
    <section id="home" className="my-auto">
      <Container className="">
        <Heading as="h1" text="Muhammad Rafly Rafsanjani" />
        <Heading as="h6" className="" text="Quality Assurance Software" />
      </Container>
    </section>
  );
};

export default HomeSection;
