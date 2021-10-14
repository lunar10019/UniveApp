import "../src/assets/globals.scss";

import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { Provider } from "react-redux";

import Layout from "../src/components/layout/Layout";
import store from "../src/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </NextIntlProvider>
  );
}
export default App;
