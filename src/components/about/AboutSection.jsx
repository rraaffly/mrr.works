import React from "react";
import { Container } from "../ui";
import SectionTitle from "../ui/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="pt-16">
      <Container className="">
        <SectionTitle text="about me." />
      </Container>
    </section>
  );
};

export default AboutSection;
