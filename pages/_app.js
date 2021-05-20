import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import ClientRouter from "../components/ClientRouter";
import { Provider } from "@shopify/app-bridge-react";
import NavBar from "../components/navbar/NavBar";
import MyProvider from "../components/ApolloClient";

class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;
    const config = {
      apiKey: API_KEY,
      shopOrigin,
      forceRedirect: true,
    };
    console.log(config);
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations} theme={{ colorScheme: "light" }}>
            <MyProvider>
              <Frame navigation={<NavBar {...this.props} />}>
                <Component {...pageProps} shopOrigin={shopOrigin} />
              </Frame>
            </MyProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  };
};
export default MyApp;
