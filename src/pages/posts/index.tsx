import React from "react";
import { PageContent, PageLayout } from "~/components/layout/page";
import { Container } from "~/components/ui";

export default function PostsPage() {
  return (
    <PageLayout>
      <PageContent>
        <section className="py-32">
          <Container>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              dicta saepe eveniet laboriosam ipsum repellendus unde est ducimus
              et iusto minus deserunt quaerat neque mollitia, velit sed error
              dolore facere?
            </p>
          </Container>
        </section>
      </PageContent>
    </PageLayout>
  );
}
