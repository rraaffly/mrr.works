import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { Container } from "~/components/ui";

export default function Home() {
  return (
    <MainLayout>
      <MainContent>
        <Container>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum
            quaerat aliquid recusandae dolorum, eius delectus repudiandae
            deserunt! Laborum ipsam eum perferendis ipsa laudantium
            exercitationem odio voluptate optio voluptatibus. Deserunt.
          </p>
        </Container>
      </MainContent>
    </MainLayout>
  );
}
