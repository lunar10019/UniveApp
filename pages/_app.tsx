import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import Layout from "../src/components/layout/Layout";
import store from "../src/store";
import "../src/assets/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Univé</title>
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
export default App;
