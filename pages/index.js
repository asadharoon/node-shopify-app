import { Mutation, Query } from "@apollo/react-components";
import React from "react";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  Page,
  Heading,
  TextStyle,
  Layout,
  EmptyState,
  Button,
} from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
const get_SCRIPT_TAG = gql`
  {
    scriptTags(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
const create_Script_Tag = gql`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const Index = (props) => {
  console.log("props are", props);
  const [createTag, { data }] = useMutation(create_Script_Tag);
  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: "Select products",
            onAction: () => console.log("clicked"),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
        {/* <Query query={get_SCRIPT_TAG}>
          {({ data, loading, error, called }) => {
            if (loading) return <div>Loading</div>;
            else if (error) console.log("error in loading query is", error);
            else return <div>{console.log(data)}</div>;
          }}
        </Query>
        <Button
          onClick={() => {
            createTag({
              variables: {
                input: {
                  src: `https://${props.shopOrigin}/admin/apps/node-app-test/hello-world`,
                  displayScope: "ALL",
                },
              },
            })
              .then(() => {
                console.log("data is", data);
              })
              .catch((err) => {
                console.log("err is", err);
              });
          }}
        >
          Attach Script
        </Button> */}
      </Layout>
    </Page>
  );
};

export default Index;
