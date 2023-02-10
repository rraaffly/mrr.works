import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { Container, Heading } from "~/components/ui";

export default function HomePage() {
  return (
    <MainLayout pageTitle="Home">
      <MainContent>
        <section id="home" className="py-32 my-auto">
          <Container>
            <Heading as="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              quo.
            </Heading>
            <Heading as="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Heading>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
