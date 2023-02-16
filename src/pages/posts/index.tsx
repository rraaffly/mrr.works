import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import PostCard from "~/components/posts/PostCard";
import { Container, Heading, Text } from "~/components/ui";

export default function PostsPage() {
  return (
    <MainLayout pageTitle="Posts">
      <MainContent>
        <section id="home" className="py-20">
          <Container>
            <Heading as="h2" bold className="mb-4 tracking-tight">
              latests posts.
            </Heading>
            <Text as="p" className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              at nobis voluptas laudantium quaerat tempore quia fuga corporis,
              laboriosam quas ducimus non mollitia alias sint odit laborum quasi
              animi! Tenetur.
            </Text>

            <div className="grid lg:grid-cols-3 gap-4">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </Container>
        </section>
      </MainContent>
    </MainLayout>
  );
}
