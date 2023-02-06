import "~/styles/globals.css";

import React from "react";
import { AppLayout } from "~/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
