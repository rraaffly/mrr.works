import React from "react";
import { Container } from "../ui";
import SectionTitle from "../ui/SectionTitle";

const MiscSection = () => {
  return (
    <section id="about" className="pt-16">
      <Container className="">
        <SectionTitle text="miscellaneous." />
      </Container>
    </section>
  );
};

export default MiscSection;
