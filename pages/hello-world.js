import { Layout, Page } from "@shopify/polaris";
import React from "react";

const HelloWorld = () => {
  console.log("in hello world app");
  return (
    <Page>
      <Layout>
        <h1>Hello World from NextJS</h1>
      </Layout>
    </Page>
  );
};

export default HelloWorld;
