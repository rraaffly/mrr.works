import React from "react";
import { PageContent, PageLayout } from "~/components/layout/page";
import { WorksSection } from "~/components/works";

const WorksPage = () => {
  return (
    <PageLayout>
      <PageContent>
        <WorksSection />
      </PageContent>
    </PageLayout>
  );
};

export default WorksPage;
