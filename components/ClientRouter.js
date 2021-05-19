import { withRouter, NextRouter as ReactRouterLink } from "next/router";
import {
  ClientRouter as AppBridgeClientRouter,
  useRoutePropagation,
} from "@shopify/app-bridge-react";

function ClientRouter(props) {
  const { router } = props;
  console.log("router in props clientrouter is", props);
  return <AppBridgeClientRouter history={router} />;
}

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

export default withRouter(ClientRouter);
// import React from "react";
// import { useEffect, useContext } from "react";
// import Router, { useRouter } from "next/router";
// import { Context as AppBridgeContext } from "@shopify/app-bridge-react";
// import { Redirect } from "@shopify/app-bridge/actions";
// import { RoutePropagator as ShopifyRoutePropagator } from "@shopify/app-bridge-react";

// const RoutePropagator = () => {
//   const router = useRouter();
//   const { route } = router;
//   const appBridge = React.useContext(AppBridgeContext);

//   // Subscribe to appBridge changes - captures appBridge urls
//   // and sends them to Next.js router. Use useEffect hook to
//   // load once when component mounted
//   useEffect(() => {
//     appBridge.subscribe(Redirect.ActionType.APP, ({ path }) => {
//       console.log("patg is", path);
//       router.push(path);
//       console.log("route is", route);
//     });
//   }, [route]);

//   return appBridge && route ? (
//     <ShopifyRoutePropagator location={route} app={appBridge} />
//   ) : null;
// };

// export default RoutePropagator;
