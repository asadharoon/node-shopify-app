// import { Frame, Navigation } from "@shopify/polaris";
// import React, { useEffect } from "react";
import { HomeMajor, OrdersMajor, ProductsMajor } from "@shopify/polaris-icons";
// import { useRouter } from "next/router";
// import { History } from "@shopify/app-bridge/actions";
// import { Redirect } from "@shopify/app-bridge/actions";
// import { useAppBridge } from "@shopify/app-bridge-react";
// const NavBar = (props) => {
//   console.log("props in navbar is", props);
//   const app = useAppBridge();
//   const redirect = Redirect.create(app);
//   let lists = [
//     { url: "/", name: "Home" },
//     {
//       url: "/products-page",
//       name: "Products",
//     },
//   ];
//   const handleClick = (url) => {
//     redirect.dispatch(Redirect.Action.APP, url);
//   };
//   return (
//     <div>
//       {lists.map((v, i) => {
//         return (
//           <li onClick={() => handleClick(v.url)} key={i}>
//             {v.name}
//           </li>
//         );
//       })}
//     </div>
//   );
// };

// export default NavBar;
import { useAppBridge } from "@shopify/app-bridge-react";
import { Navigation } from "@shopify/polaris";
import React, { useState } from "react";
import { Redirect } from "@shopify/app-bridge/actions";
import { useEffect } from "react";

const Navbar = (props) => {
  const [location, setLocation] = useState(`${props.router.pathname}`);
  const [load, setLoad] = useState(true);
  const app = useAppBridge();
  const redirect = Redirect.create(app);
  useEffect(() => {
    setLoad(false);
  }, []);
  const handleClick = (url) => {
    setLoad(true);
    redirect.dispatch(Redirect.Action.APP, url);
    setLocation(url);
    setLoad(false);
  };
  if (load) return null;
  return (
    <Navigation location={location}>
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Home",
            onClick: () => handleClick("/"),
            icon: HomeMajor,
          },
          {
            url: "/annotated-layout",
            label: "Annotated Layout",
            icon: OrdersMajor,
            onClick: () => handleClick("/annotated-layout"),
          },
          {
            url: "/products-page",
            label: "Products",
            icon: ProductsMajor,
            onClick: () => handleClick("/products-page"),
          },
          {
            url: "/hello-world",
            label: "Hello world",
            icon: ProductsMajor,
            onClick: () => handleClick("/hello-world"),
          },
          {
            url: "/createCustomer",
            label: "Create Customer",
            icon: ProductsMajor,
            onClick: () => handleClick("/createCustomer"),
          },
          {
            url: "/discounts",
            label: "Discounts Tab",
            icon: ProductsMajor,
            onClick: () => handleClick("/discounts"),
          },
        ]}
      />
    </Navigation>
  );
};

export default Navbar;
