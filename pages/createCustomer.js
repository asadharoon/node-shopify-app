import { useMutation } from "@apollo/react-hooks";
import {
  Button,
  Checkbox,
  Toast,
  Form,
  FormLayout,
  Frame,
  Layout,
  Page,
  TextField,
} from "@shopify/polaris";
import gql from "graphql-tag";
import { Form as FormFormik, Formik } from "formik";
import React from "react";
import { createCustSchema } from "../validations/createCustomerValidation";
import Loader from "react-loader-spinner";

const createCust = gql`
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;
const ShowError = ({ error }) => <span style={{ color: "red" }}>{error}</span>;
const CreateCustomer = () => {
  const [createCustomer, { data, loading, called, error }] =
    useMutation(createCust);

  return (
    <Page>
      <Layout sectioned>
        {/* <Frame>
          {called && data && (
            <Toast
              content={error ? error.message : "Created Successfully"}
              error={error}
            />
          )}

        </Frame> */}
        <Formik
          onSubmit={(values) => {
            console.log("submitted");
            createCustomer({
              variables: {
                input: {
                  ...values,
                },
              },
            });
          }}
          validationSchema={createCustSchema}
          initialValues={{ email: "" }}
        >
          {({ values, handleChange, errors }) => {
            return (
              <FormFormik>
                <FormLayout>
                  <TextField
                    value={values.firstName}
                    onChange={handleChange("firstName")}
                    label="Enter Firstname"
                    type="text"
                    helpText={<ShowError error={errors.firstName} />}
                  />
                  <TextField
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                    label="Enter Lastname"
                    type="text"
                    helpText={<ShowError error={errors.lastName} />}
                  />
                  <TextField
                    value={values.email}
                    onChange={handleChange("email")}
                    label="Email"
                    type="email"
                    helpText={<ShowError error={errors.email} />}
                  />
                  <TextField
                    value={values.phone}
                    onChange={handleChange("phone")}
                    label="Enter Phone No"
                    type="text"
                    helpText={<ShowError error={errors.phone} />}
                  />
                  <Button submit>
                    {loading ? (
                      <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={20}
                        width={20}
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </FormLayout>
              </FormFormik>
            );
          }}
        </Formik>
      </Layout>
    </Page>
  );
};

export default CreateCustomer;
