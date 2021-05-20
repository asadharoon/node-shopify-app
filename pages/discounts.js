import { Mutation } from "@apollo/react-components";
import {
  Button,
  Card,
  DisplayText,
  Layout,
  Page,
  TextStyle,
} from "@shopify/polaris";
import gql from "graphql-tag";
import React, { useState } from "react";
// const createSellPlan = gql`
//   mutation sellingPlanGroupCreate($input: SellingPlanGroupInput!) {
//     sellingPlanGroupCreate(input: $input) {
//       sellingPlanGroup {
//         id
//       }
//       userErrors {
//         code
//         field
//         message
//       }
//     }
//   }
// `;
// const addSellPlan = gql`
//   mutation {
//     sellingPlanGroupCreate(
//       input: {
//         name: "Subscribe and save"
//         merchantCode: "subscribe-and-save"
//         options: ["Delivery every"]
//         position: 1
//         sellingPlansToCreate: [
//           {
//             name: "Delivered every week"
//             options: "1 Week(s)"
//             position: 1
//             billingPolicy: { recurring: { interval: WEEK, intervalCount: 1 } }
//             deliveryPolicy: { recurring: { interval: WEEK, intervalCount: 1 } }
//             pricingPolicies: [
//               {
//                 fixed: {
//                   adjustmentType: PERCENTAGE
//                   adjustmentValue: { percentage: 15.0 }
//                 }
//               }
//             ]
//           }
//         ]
//       }
//       resources: { productIds: [], productVariantIds: [] }
//     ) {
//       sellingPlanGroup {
//         id
//       }
//       userErrors {
//         field
//         message
//       }
//     }
//   }
// `;
const DiscountsPage = () => {
  const [showPlans, setShowPlans] = useState(false);
  const [createPlans, setCreatePlan] = useState(false);
  const handleCloseShowPlans = () => {
    setShowPlans(true);
    setCreatePlan(false);
  };
  const handleCloseCreatePlans = () => {
    setCreatePlan(true);
    setShowPlans(false);
  };
  const ShowPlansContent = () => <Card></Card>;
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <DisplayText size="extraLarge">Discounts Page</DisplayText>
        </Layout.Section>
        <Layout.AnnotatedSection>
          <Layout.Section>
            <Button onClick={handleCloseShowPlans}>Show Sell Plans</Button>
          </Layout.Section>
          <Layout.Section secondary>
            <Button onClick={handleCloseCreatePlans}>Create Sell Plans</Button>
          </Layout.Section>
        </Layout.AnnotatedSection>
        <Layout.Section>
          {showPlans && <div>In Show Plans</div>}
          {createPlans && <div>In Create Plans</div>}
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DiscountsPage;
