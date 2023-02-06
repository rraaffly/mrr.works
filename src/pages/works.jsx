import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { WorksSection } from "~/components/works";

export default function WorksPage() {
  return (
    <MainLayout>
      <MainContent>
        <WorksSection />
      </MainContent>
    </MainLayout>
  );
}
