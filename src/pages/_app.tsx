import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { GlobalStyle } from "../styles/global";
import { useEffect } from "react";

import * as gtag from "../lib/gtag";
import Analytics from "../components/global/Analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
