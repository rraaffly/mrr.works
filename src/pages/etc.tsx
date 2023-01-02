import React from "react";
import { PageContent, PageLayout } from "~/components/layout/page";
import { Container } from "~/components/ui";

export default function EtcPage() {
  return (
    <PageLayout>
      <PageContent>
        <section className="py-32">
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              at voluptatem, expedita excepturi beatae aliquid nemo corrupti
              reiciendis impedit autem hic omnis consequatur, repellendus amet,
              mollitia deleniti laborum dolorem modi!
            </p>
          </Container>
        </section>
      </PageContent>
    </PageLayout>
  );
}
