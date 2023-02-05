import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { Container } from "~/components/ui";
import SectionTitle from "~/components/ui/SectionTitle";

export default function About() {
  return (
    <MainLayout>
      <MainContent>
        <section id="about">
          <SectionTitle>ASd</SectionTitle>
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quibusdam aspernatur rem alias dolor impedit cupiditate possimus
              nihil sapiente, totam, soluta labore distinctio velit incidunt
              rerum nesciunt perspiciatis veniam corporis!
            </p>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
