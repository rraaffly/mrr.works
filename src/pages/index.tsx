import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { MainContent, MainLayout } from "~/components/layout";
import { ButtonLink, Container, Heading, Link, Text } from "~/components/ui";

export default function HomePage() {
  return (
    <MainLayout pageTitle="Home">
      <MainContent>
        <section id="home" className="my-auto">
          <Container className="flex flex-col items-center lg:items-start">
            <Text as="span">Hello, I&apos;m</Text>
            <Heading as="h1" bold className="tracking-tight uppercase text-lg">
              Muhammad Rafly Rafsanjani
            </Heading>
            <Heading as="h4">Software Developer</Heading>
            <Text as="span" className="block mt-10 text-lg">
              🚀 Exploring opportunities and side projects.
            </Text>
            <Text as="span" className="block text-lg">
              🚀 Currently specializing in Front-end Development.
            </Text>
            <ButtonLink size="md" href="/" className="mt-4">
              Download Resume <IoDownloadOutline className="ml-2.5 text-lg" />
            </ButtonLink>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
