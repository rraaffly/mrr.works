import React from "react";
import { MainContent, MainLayout } from "~/components/layout";
import { Showcase } from "~/components/showcase";

export default function ShowcasePage() {
  return (
    <MainLayout pageTitle="Showcase">
      <MainContent>
        <Showcase />
      </MainContent>
    </MainLayout>
  );
}
