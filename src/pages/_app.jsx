import "~/styles/globals.css";

import React from "react";
import { Layout } from "~/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
