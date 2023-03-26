import React from "react";
import { JumbotronSection } from "~/components/jumbotron";
import { PageContent, PageLayout } from "~/components/layout";

export default function HomeIndex() {
  return (
    <PageLayout>
      <PageContent>
        <JumbotronSection />
      </PageContent>
    </PageLayout>
  );
}
