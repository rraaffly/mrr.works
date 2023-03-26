import "~/assets/styles/globals.css";
import "nprogress/nprogress.css";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { AppLayout } from "~/components/layout";
import { loadingBar } from "~/libs/loadingBar";

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        loadingBar.start();
      }
    };
    const handleStop = () => {
      loadingBar.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
