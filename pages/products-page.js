import React, { useState } from "react";
import { EmptyState, Layout, Page } from "@shopify/polaris";

import { ResourcePicker } from "@shopify/app-bridge-react";
import ResourceListWithProducts from "../components/ResourceList";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const handleSelection = (resources) => {
    setOpen(false);
    console.log(resources);
    let ProductsIDSelected = resources.selection.map((product) => product.id);
    setSelectedIds(ProductsIDSelected);
  };
  return (
    <Page>
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setOpen(false)}
      />

      {selectedIds.length > 0 ? (
        <ResourceListWithProducts ids={selectedIds} />
      ) : (
        <Layout>
          <EmptyState
            heading="Select products to start"
            action={{
              content: "Select products",
              onAction: () => setOpen(true),
            }}
            image={img}
          >
            <p>Select products and change their price temporarily</p>
          </EmptyState>
        </Layout>
      )}
    </Page>
  );
};

export default ProductPage;
