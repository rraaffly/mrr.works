import React from "react";
import { WelcomeSection } from "~/components/home";
import { PageContent, PageLayout } from "~/components/layout/page";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageContent>
        <WelcomeSection />
      </PageContent>
    </PageLayout>
  );
}
