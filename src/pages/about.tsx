import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { Container, Heading, Text } from "~/components/ui";

export default function AboutPage() {
  return (
    <MainLayout pageTitle="About">
      <MainContent>
        <section id="home" className="py-20">
          <Container className="mb-6">
            <Heading bold as="h2" className="mb-4 tracking-tight">
              about me.
            </Heading>

            <Text as="p" className="text-justify">
              I&apos;m a self-taught web developer based in Jakarta, Indonesia,
              helping to blur the line between high-performance engineering and
              good design. I&apos;m also an extensive contributor to the
              open-source software community with a number of
              actively-maintained projects, and community contributions.
              <br />
              <br />
              I helped create and moderate Frontend Indonesia, a Discord
              community of Indonesian frontend developers to hang out, and
              discuss hot new frontend technologies, like React, Vue, Svelte,
              and Angular.
              <br />
              <br />
              Outside of work, I also write stuff about computers and everything
              else on my blog, and do livestreams of coding and video games on
              Twitch. When I no longer do either of the things mentioned above,
              then something really bad must have happened to me.
            </Text>
          </Container>
          <Container>
            <Heading bold as="h2" className="mb-4 tracking-tight">
              skillset.
            </Heading>

            <Heading bold as="h5" className="mb-4 tracking-tight">
              Front End Development
            </Heading>
            <Heading bold as="h5" className="mb-4 tracking-tight">
              Back End Development
            </Heading>
            <Heading bold as="h5" className="mb-4 tracking-tight">
              RDBMS
            </Heading>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
