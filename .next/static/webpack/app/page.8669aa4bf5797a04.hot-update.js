/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ClaimPage.tsx":
/*!**************************************!*\
  !*** ./app/components/ClaimPage.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClaimPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_pixel_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pixel-theme.css */ \"(app-pages-browser)/./app/styles/pixel-theme.css\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./app/components/Button.tsx\");\n/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContainer */ \"(app-pages-browser)/./app/components/TabContainer.tsx\");\n/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TabContainer__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst CONTRACT_ADDRESS = '0x...' // Replace with your actual contract address\n;\nconst CONTRACT_ABI = [] // Replace with your actual contract ABI\n;\nfunction ClaimPage() {\n    const tabs = [\n        {\n            id: 'claim',\n            label: 'Claim',\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Claim Tokens\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Claim\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            id: 'burn',\n            label: 'Burn',\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Burn to Claim\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Burn to Claim\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            id: 'dao',\n            label: 'DAO',\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Join DAO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Join DAO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            id: 'discord',\n            label: 'Community',\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Join Discord\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Join Discord\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_TabContainer__WEBPACK_IMPORTED_MODULE_4___default()), {\n        tabs: tabs\n    }, void 0, false, {\n        fileName: \"/Users/kylejacobs/yaypes-burn/app/components/ClaimPage.tsx\",\n        lineNumber: 56,\n        columnNumber: 10\n    }, this);\n}\n_c = ClaimPage;\nvar _c;\n$RefreshReg$(_c, \"ClaimPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NsYWltUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXVDO0FBRUw7QUFDTDtBQUNZO0FBRXpDLE1BQU1HLG1CQUFtQixRQUFRLDRDQUE0Qzs7QUFDN0UsTUFBTUMsZUFBZSxFQUFFLENBQUMsd0NBQXdDOztBQUVqRCxTQUFTQztJQUN0QixNQUFNQyxPQUFPO1FBQ1g7WUFDRUMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLHVCQUNFLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNWLCtDQUFNQTtrQ0FBQzs7Ozs7Ozs7Ozs7O1FBR2Q7UUFDQTtZQUNFTSxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsdUJBQ0UsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ1YsK0NBQU1BO2tDQUFDOzs7Ozs7Ozs7Ozs7UUFHZDtRQUNBO1lBQ0VNLElBQUk7WUFDSkMsT0FBTztZQUNQQyx1QkFDRSw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDViwrQ0FBTUE7a0NBQUM7Ozs7Ozs7Ozs7OztRQUdkO1FBQ0E7WUFDRU0sSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLHVCQUNFLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNWLCtDQUFNQTtrQ0FBQzs7Ozs7Ozs7Ozs7O1FBR2Q7S0FDRDtJQUVELHFCQUFPLDhEQUFDQyxzREFBWUE7UUFBQ0ksTUFBTUE7Ozs7OztBQUM3QjtLQTdDd0JEIiwic291cmNlcyI6WyIvVXNlcnMva3lsZWphY29icy95YXlwZXMtYnVybi9hcHAvY29tcG9uZW50cy9DbGFpbVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZVJlYWRDb250cmFjdCwgdXNlV3JpdGVDb250cmFjdCwgdXNlU2ltdWxhdGVDb250cmFjdCB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0ICcuLi9zdHlsZXMvcGl4ZWwtdGhlbWUuY3NzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBUYWJDb250YWluZXIgZnJvbSAnLi9UYWJDb250YWluZXInXG5cbmNvbnN0IENPTlRSQUNUX0FERFJFU1MgPSAnMHguLi4nIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBjb250cmFjdCBhZGRyZXNzXG5jb25zdCBDT05UUkFDVF9BQkkgPSBbXSAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgY29udHJhY3QgQUJJXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsYWltUGFnZSgpIHtcbiAgY29uc3QgdGFicyA9IFtcbiAgICB7XG4gICAgICBpZDogJ2NsYWltJyxcbiAgICAgIGxhYmVsOiAnQ2xhaW0nLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5DbGFpbSBUb2tlbnM8L2gyPlxuICAgICAgICAgIDxCdXR0b24+Q2xhaW08L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2J1cm4nLFxuICAgICAgbGFiZWw6ICdCdXJuJyxcbiAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+QnVybiB0byBDbGFpbTwvaDI+XG4gICAgICAgICAgPEJ1dHRvbj5CdXJuIHRvIENsYWltPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkYW8nLFxuICAgICAgbGFiZWw6ICdEQU8nLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5Kb2luIERBTzwvaDI+XG4gICAgICAgICAgPEJ1dHRvbj5Kb2luIERBTzwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGlzY29yZCcsXG4gICAgICBsYWJlbDogJ0NvbW11bml0eScsXG4gICAgICBjb250ZW50OiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPkpvaW4gRGlzY29yZDwvaDI+XG4gICAgICAgICAgPEJ1dHRvbj5Kb2luIERpc2NvcmQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiA8VGFiQ29udGFpbmVyIHRhYnM9e3RhYnN9IC8+O1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJUYWJDb250YWluZXIiLCJDT05UUkFDVF9BRERSRVNTIiwiQ09OVFJBQ1RfQUJJIiwiQ2xhaW1QYWdlIiwidGFicyIsImlkIiwibGFiZWwiLCJjb250ZW50IiwiZGl2IiwiaDIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ClaimPage.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/TabContainer.tsx":
/*!*****************************************!*\
  !*** ./app/components/TabContainer.tsx ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});