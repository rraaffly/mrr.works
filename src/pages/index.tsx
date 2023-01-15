import React from "react";
import { PageContent, PageLayout } from "~/components/layout/page";
import { WelcomeSection } from "~/components/home";

export default function HomePage() {
  return (
    <PageLayout>
      <PageContent>
        <WelcomeSection />
      </PageContent>
    </PageLayout>
  );
}
