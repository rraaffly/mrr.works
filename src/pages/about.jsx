import React from "react";
import { AboutSection } from "~/components/about";
import { MainContent, MainLayout } from "~/components/layout";

export default function AboutPage() {
  return (
    <MainLayout>
      <MainContent>
        <AboutSection />
      </MainContent>
    </MainLayout>
  );
}
