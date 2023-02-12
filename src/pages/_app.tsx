import "~/assets/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { AppLayout } from "~/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
