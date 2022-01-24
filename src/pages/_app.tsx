import type { AppProps } from "next/app";
import { Footer } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { ApiVariable } from "../contexts/apiVariable";

import { GlobalStyle } from "../styles/global";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <>
        <GlobalStyle />
        <ApiVariable>
          <Component {...pageProps} />
        </ApiVariable>
      </>
    );
  }
  return (
    <>
      <Header />
      <GlobalStyle />
      <ApiVariable>
        <Component {...pageProps} />
      </ApiVariable>
      <Footer />
    </>
  );
}

export default MyApp;
