import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { Container, Heading, Text } from "~/components/ui";

export default function PostsDetailPage() {
  return (
    <MainLayout pageTitle="Posts">
      <MainContent>
        <section id="home" className="py-20">
          <Container>
            <Heading
              bold
              as="h3"
              className="px-0 mb-4 text-center tracking-tight lg:px-8"
            >
              Dynamic broadcast overlays with Google Sheets and Web Technologies
            </Heading>
            <Text as="p" className="mb-10 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              at nobis voluptas laudantium quaerat tempore quia fuga corporis,
              laboriosam quas ducimus non mollitia alias sint odit laborum quasi
              animi! Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus dolorem adipisci veritatis saepe voluptatibus
              laboriosam autem cumque voluptate, eaque fugiat quibusdam nostrum
              voluptates quos doloremque consequuntur architecto aliquam facere?
              Itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae quaerat qui quia facere, aspernatur doloremque ea corporis
              voluptatibus, alias, atque provident! Minus, temporibus? Velit
              aut, ea autem delectus distinctio tempora? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Adipisci quasi, exercitationem
              iste enim earum similique suscipit, eligendi ipsam architecto
              aperiam molestias eius sint. Quos, nemo quibusdam repellat maiores
              dignissimos dolorem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Itaque earum, officia, dignissimos ipsum minus
              veniam nobis reiciendis blanditiis repellat sed quaerat dolorum
              aut dolorem deleniti aliquam, commodi molestiae illum quidem.
            </Text>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
