import React from "react";
import { HomeSection } from "~/components/home";
import { MainContent, MainLayout } from "~/components/layout";

export default function HomePage() {
  return (
    <MainLayout>
      <MainContent>
        <HomeSection />
      </MainContent>
    </MainLayout>
  );
}
