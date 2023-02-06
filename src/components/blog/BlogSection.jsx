import React from "react";
import { Container } from "../ui";
import SectionTitle from "../ui/SectionTitle";

const BlogSection = () => {
  return (
    <section id="blog" className="pt-16">
      <Container className="">
        <SectionTitle text="latest posts." />
      </Container>
    </section>
  );
};

export default BlogSection;
