module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@shopify/polaris/dist/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/dist/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9wb2xhcmlzL2Rpc3Qvc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@shopify/polaris/dist/styles.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-components */ \"@apollo/react-components\");\n/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris/dist/styles.css */ \"./node_modules/@shopify/polaris/dist/styles.css\");\n/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/home/asadharoon/Desktop/node-shopify-app/pages/index.js\";\n\n\n\n\n\n\n\nconst img = \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\";\nconst get_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`\n  {\n    scriptTags(first: 10) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n`;\nconst create_Script_Tag = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`\n  mutation scriptTagCreate($input: ScriptTagInput!) {\n    scriptTagCreate(input: $input) {\n      scriptTag {\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n`;\n\nconst Index = props => {\n  console.log(\"props are\", props);\n  const [createTag, {\n    data\n  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__[\"useMutation\"])(create_Script_Tag);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Page\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Layout\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"EmptyState\"], {\n        heading: \"Discount your products temporarily\",\n        action: {\n          content: \"Select products\",\n          onAction: () => console.log(\"clicked\")\n        },\n        image: img,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Select products to change their price temporarily.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImltZyIsImdldF9TQ1JJUFRfVEFHIiwiZ3FsIiwiY3JlYXRlX1NjcmlwdF9UYWciLCJJbmRleCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVRhZyIsImRhdGEiLCJ1c2VNdXRhdGlvbiIsImNvbnRlbnQiLCJvbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLG1FQUFaO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxrREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZBO0FBV0EsTUFBTUMsaUJBQWlCLEdBQUdELGtEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBOztBQWNBLE1BQU1FLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRixLQUF6QjtBQUNBLFFBQU0sQ0FBQ0csU0FBRCxFQUFZO0FBQUVDO0FBQUYsR0FBWixJQUF3QkMsdUVBQVcsQ0FBQ1AsaUJBQUQsQ0FBekM7QUFDQSxzQkFDRSxxRUFBQyxxREFBRDtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxlQUFPLEVBQUMsb0NBRFY7QUFFRSxjQUFNLEVBQUU7QUFDTlEsaUJBQU8sRUFBRSxpQkFESDtBQUVOQyxrQkFBUSxFQUFFLE1BQU1OLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFGVixTQUZWO0FBTUUsYUFBSyxFQUFFUCxHQU5UO0FBQUEsK0JBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTJDRCxDQTlDRDs7QUFnRGVJLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXRhdGlvbiwgUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaXRsZUJhciB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XG5pbXBvcnQge1xuICBQYWdlLFxuICBIZWFkaW5nLFxuICBUZXh0U3R5bGUsXG4gIExheW91dCxcbiAgRW1wdHlTdGF0ZSxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IFwiQHNob3BpZnkvcG9sYXJpcy9kaXN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XG5cbmNvbnN0IGltZyA9IFwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIjtcbmNvbnN0IGdldF9TQ1JJUFRfVEFHID0gZ3FsYFxuICB7XG4gICAgc2NyaXB0VGFncyhmaXJzdDogMTApIHtcbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgbm9kZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmNvbnN0IGNyZWF0ZV9TY3JpcHRfVGFnID0gZ3FsYFxuICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcbiAgICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgc2NyaXB0VGFnIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIHVzZXJFcnJvcnMge1xuICAgICAgICBmaWVsZFxuICAgICAgICBtZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhcInByb3BzIGFyZVwiLCBwcm9wcyk7XG4gIGNvbnN0IFtjcmVhdGVUYWcsIHsgZGF0YSB9XSA9IHVzZU11dGF0aW9uKGNyZWF0ZV9TY3JpcHRfVGFnKTtcbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgaGVhZGluZz1cIkRpc2NvdW50IHlvdXIgcHJvZHVjdHMgdGVtcG9yYXJpbHlcIlxuICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgcHJvZHVjdHNcIixcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNrZWRcIiksXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbWFnZT17aW1nfVxuICAgICAgICA+XG4gICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS48L3A+XG4gICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgey8qIDxRdWVyeSBxdWVyeT17Z2V0X1NDUklQVF9UQUd9PlxuICAgICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgY2FsbGVkIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gbG9hZGluZyBxdWVyeSBpc1wiLCBlcnJvcik7XG4gICAgICAgICAgICBlbHNlIHJldHVybiA8ZGl2Pntjb25zb2xlLmxvZyhkYXRhKX08L2Rpdj47XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9RdWVyeT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRhZyh7XG4gICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IGBodHRwczovLyR7cHJvcHMuc2hvcE9yaWdpbn0vYWRtaW4vYXBwcy9ub2RlLWFwcC10ZXN0L2hlbGxvLXdvcmxkYCxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogXCJBTExcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBpc1wiLCBkYXRhKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyciBpc1wiLCBlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQXR0YWNoIFNjcmlwdFxuICAgICAgICA8L0J1dHRvbj4gKi99XG4gICAgICA8L0xheW91dD5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/react-components":
/*!*******************************************!*\
  !*** external "@apollo/react-components" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWNvbXBvbmVudHNcIj82MWU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhcG9sbG8vcmVhY3QtY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-components\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });