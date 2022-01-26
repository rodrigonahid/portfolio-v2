import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { ApiVariable } from "../contexts/apiVariable";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ApiVariable>
        <Component {...pageProps} />
      </ApiVariable>
    </>
  );
}

export default appWithTranslation(MyApp);
