"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-client)/./components/ListItem.tsx":
/*!*********************************!*\
  !*** ./components/ListItem.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ListItem = (param)=>{\n    let { image, name, href } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onClick = ()=>{\n        //Add authentication before push\n        router.push(href);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative min-h-[64px] min-w-[64px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"object-cover\",\n                    fill: true,\n                    src: image,\n                    alt: \"Image\"\n                }, void 0, false, {\n                    fileName: \"/Users/NATALIA/Documents/spotify-clone/components/ListItem.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/NATALIA/Documents/spotify-clone/components/ListItem.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-medium truncate py-5\",\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/NATALIA/Documents/spotify-clone/components/ListItem.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/NATALIA/Documents/spotify-clone/components/ListItem.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9MaXN0SXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDZDtBQVE5QixNQUFNRSxXQUFvQztRQUFDLEVBQ3ZDQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsSUFBSSxFQUNQOztJQUNHLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUV4QixNQUFNTyxVQUFVO1FBQ1osZ0NBQWdDO1FBQ2hDRCxPQUFPRSxJQUFJLENBQUNIO0lBQ2hCO0lBQ0EscUJBQ0ksOERBQUNJO1FBQ0RDLFdBQVU7OzBCQWFOLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ1QsbURBQUtBO29CQUNGUyxXQUFVO29CQUNWRSxJQUFJO29CQUNKQyxLQUFLVjtvQkFDTFcsS0FBSTs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNDO2dCQUFFTCxXQUFVOzBCQUNSTjs7Ozs7Ozs7Ozs7O0FBS2pCO0dBeENNRjs7UUFLYUYsc0RBQVNBOzs7S0FMdEJFO0FBMENOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4PzM5ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuaW50ZXJmYWNlIExpc3RJdGVtUHJvcHMge1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgTGlzdEl0ZW06IFJlYWN0LkZDPExpc3RJdGVtUHJvcHM+ID0gKHtcbiAgICBpbWFnZSxcbiAgICBuYW1lLFxuICAgIGhyZWZcbn0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgLy9BZGQgYXV0aGVudGljYXRpb24gYmVmb3JlIHB1c2hcbiAgICAgICAgcm91dGVyLnB1c2goaHJlZilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgIHJlbGF0aXZlXG4gICAgICAgICAgICBncm91cFxuICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAgICByb3VuZGVkLW1kXG4gICAgICAgICAgICBvdmVyZmxvdy1oaWRkZW5cbiAgICAgICAgICAgIGdhcC14LTRcbiAgICAgICAgICAgIGJnLW5ldXRyYWwtMTAwLzEwXG4gICAgICAgICAgICBob3ZlcjpiZy1uZXV0cmFsLTEwMC8yMFxuICAgICAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICAgICAgcHItNFxuICAgICAgICBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtWzY0cHhdIG1pbi13LVs2NHB4XVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRydW5jYXRlIHB5LTVcIj5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSW1hZ2UiLCJMaXN0SXRlbSIsImltYWdlIiwibmFtZSIsImhyZWYiLCJyb3V0ZXIiLCJvbkNsaWNrIiwicHVzaCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImRpdiIsImZpbGwiLCJzcmMiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ListItem.tsx\n"));

/***/ })

});