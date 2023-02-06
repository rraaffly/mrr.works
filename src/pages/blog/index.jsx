import React from "react";
import { BlogSection } from "~/components/blog";
import { MainContent, MainLayout } from "~/components/layout";

export default function BlogPage() {
  return (
    <MainLayout>
      <MainContent>
        <BlogSection />
      </MainContent>
    </MainLayout>
  );
}
