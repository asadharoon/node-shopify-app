import React from "react";
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import ResourceListWithProducts from "../components/ResourceList";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false, selectedIds: [] };
  render() {
    const { selectedIds, open } = this.state;

    return (
      <Page>
        <TitleBar
          title="Sample App"
          primaryAction={{
            content: "Select products",
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />

        {selectedIds.length > 0 ? (
          <ResourceListWithProducts ids={selectedIds} />
        ) : (
          <Layout>
            <EmptyState
              heading="Select products to start"
              action={{
                content: "Select products",

                onAction: () => this.setState({ open: true }),
              }}
              image={img}
            >
              <p>Select products and change their price temporarily</p>
            </EmptyState>
          </Layout>
        )}
      </Page>
    );
  }
  handleSelection = (resources) => {
    this.setState({ open: false });
    console.log(resources);
    let ProductsIDSelected = resources.selection.map((product) => product.id);
    this.setState({ selectedIds: ProductsIDSelected });
  };
}

export default Index;
