import type { AppProps } from "next/app";
import { Footer } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { api } from "../services/api";
import { GlobalStyle } from "../styles/global";

const apiUrl = process.env.API_URL;

function MyApp({ Component, pageProps }: AppProps) {
  console.log(apiUrl);
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
