import "../src/assets/globals.scss";

import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { Provider } from "react-redux";
import Head from "next/head";

import Layout from "../src/components/layout/Layout";
import store from "../src/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Univé</title>
      </Head>

      <NextIntlProvider messages={pageProps.messages}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </NextIntlProvider>
    </>
  );
}
export default App;
