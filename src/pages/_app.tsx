import type { AppProps } from "next/app";
import { Footer } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { ApiVariable } from "../contexts/apiVariable";
import { api } from "../services/api";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
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
