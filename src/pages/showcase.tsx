import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { ShowcaseCard } from "~/components/showcase";
import { Container, Heading, Text } from "~/components/ui";

export default function ShowcasePage() {
  return (
    <MainLayout pageTitle="Showcase">
      <MainContent>
        <section id="home" className="py-20">
          <Container>
            <Heading as="h2" bold className="mb-4 tracking-tight">
              showcase.
            </Heading>
            <Text as="p" className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dicta assumenda ducimus ratione similique repudiandae magnam, iure
              aperiam omnis voluptatum in expedita sunt quisquam suscipit
              laboriosam obcaecati aliquam temporibus officiis.
            </Text>

            <div className="grid grid-cols-2 gap-4">
              <ShowcaseCard />
              <ShowcaseCard />
              <ShowcaseCard />
              <ShowcaseCard />
              <ShowcaseCard />
              <ShowcaseCard />
              <ShowcaseCard />
            </div>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
