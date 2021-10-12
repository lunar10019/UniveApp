import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";

import Layout from "../src/components/layout/Layout";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
}
export default App;
