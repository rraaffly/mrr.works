import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { Container, Heading, Text } from "~/components/ui";

export default function MiscellaneousPage() {
  return (
    <MainLayout pageTitle="Miscellaneous">
      <MainContent>
        <section id="home" className="py-20">
          <Container>
            <Heading as="h2" bold className="mb-4 tracking-tight">
              miscellaneous.
            </Heading>
            <Text as="p" className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dicta assumenda ducimus ratione similique repudiandae magnam, iure
              aperiam omnis voluptatum in expedita sunt quisquam suscipit
              laboriosam obcaecati aliquam temporibus officiis.
            </Text>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
