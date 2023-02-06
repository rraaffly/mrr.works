import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { MiscSection } from "~/components/misc";

export default function MiscellaneousPage() {
  return (
    <MainLayout>
      <MainContent>
        <MiscSection />
      </MainContent>
    </MainLayout>
  );
}
