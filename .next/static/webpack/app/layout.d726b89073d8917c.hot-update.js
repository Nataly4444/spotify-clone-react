"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"abd34e7609ae\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NjQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImFiZDM0ZTc2MDlhZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/SidebarItem.tsx":
/*!************************************!*\
  !*** ./components/SidebarItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ \"(app-client)/./node_modules/tailwind-merge/dist/lib/tw-merge.mjs\");\n\n\n\nconst SidebarItem = (param)=>{\n    let { icon, label, active, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"\\n                flex\\n                flex-row\\n                h-auto\\n                item-center\\n                w-full\\n                gap-x-4\\n                text-md\\n                font-medium\\n                cursor-pointer\\n                hover:text-white\\n                transition\\n                text-neutral-400\\n                py-1\\n            \", active && \"text-white\"),\n        children: \"Sidebar\"\n    }, void 0, false, {\n        fileName: \"/Users/NATALIA/Documents/spotify-clone/components/SidebarItem.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_c = SidebarItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarItem);\nvar _c;\n$RefreshReg$(_c, \"SidebarItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TaWRlYmFySXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBRVk7QUFTekMsTUFBTUUsY0FBMEM7UUFBQyxFQUM3Q0MsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsSUFBSSxFQUNQO0lBQ0cscUJBQ0ksOERBQUNOLGtEQUFJQTtRQUNETSxNQUFNQTtRQUNOQyxXQUFXTix1REFBT0EsQ0FBRSxvWEFlcEJJLFVBQVU7a0JBQWU7Ozs7OztBQUlyQztLQTVCTUg7QUErQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFySXRlbS50c3g/ZGQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBJY29uVHlwZSB9IGZyb20gXCJyZWFjdC1pY29uc1wiO1xuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xuXG5pbnRlcmZhY2UgU2lkZWJhckl0ZW1Qcm9wcyB7XG4gICAgaWNvbjogSWNvblR5cGU7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGhyZWY6IHN0cmluZ1xufVxuXG5jb25zdCBTaWRlYmFySXRlbTogUmVhY3QuRkM8U2lkZWJhckl0ZW1Qcm9wcz4gPSAoe1xuICAgIGljb24sXG4gICAgbGFiZWwsXG4gICAgYWN0aXZlLFxuICAgIGhyZWZcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dHdNZXJnZShgXG4gICAgICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgICAgIGZsZXgtcm93XG4gICAgICAgICAgICAgICAgaC1hdXRvXG4gICAgICAgICAgICAgICAgaXRlbS1jZW50ZXJcbiAgICAgICAgICAgICAgICB3LWZ1bGxcbiAgICAgICAgICAgICAgICBnYXAteC00XG4gICAgICAgICAgICAgICAgdGV4dC1tZFxuICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtXG4gICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXJcbiAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIHRleHQtbmV1dHJhbC00MDBcbiAgICAgICAgICAgICAgICBweS0xXG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgYWN0aXZlICYmIFwidGV4dC13aGl0ZVwiKX0+XG4gICAgICAgICAgICBTaWRlYmFyXG4gICAgICAgIDwvTGluaz5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJJdGVtOyJdLCJuYW1lcyI6WyJMaW5rIiwidHdNZXJnZSIsIlNpZGViYXJJdGVtIiwiaWNvbiIsImxhYmVsIiwiYWN0aXZlIiwiaHJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/SidebarItem.tsx\n"));

/***/ })

});