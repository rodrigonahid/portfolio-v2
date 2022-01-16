import type { AppProps } from "next/app";
import { Footer } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
