/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notes",{

/***/ "./pages/notes/index.jsx":
/*!*******************************!*\
  !*** ./pages/notes/index.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/sidpande2/FEM/nextjs-basic/pages/notes/index.jsx\",\n    _this = undefined;\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var notes = _ref.notes;\n  //   const notes = new Array(15)\n  //     .fill(1)\n  //     .map((e, i) => ({ id: i, title: `This is my note ${i}` }));\n  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    sx: {\n      variant: 'containers.page'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"My Notes\"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    sx: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      alignItems: 'center',\n      flexWrap: 'wrap'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, notes.map(function (note) {\n    return (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      sx: {\n        width: '33%',\n        p: 2\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      key: note.id,\n      href: \"/notes/[id]\",\n      as: \"/notes/\".concat(note.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }\n    }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n      sx: {\n        textDecoration: 'none',\n        cursor: 'pointer'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      sx: {\n        variant: 'containers.card'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 19\n      }\n    }, note.title)))));\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4PzVlNGEiXSwibmFtZXMiOlsibm90ZXMiLCJ2YXJpYW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwibWFwIiwibm90ZSIsIndpZHRoIiwicCIsImlkIiwidGV4dERlY29yYXRpb24iLCJjdXJzb3IiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsZ0JBQWU7QUFBQSxNQUFaQSxLQUFZLFFBQVpBLEtBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FDRTtBQUFLLE1BQUUsRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0U7QUFDRSxNQUFFLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRkMsb0JBQWMsRUFBRSxlQUZkO0FBR0ZDLGdCQUFVLEVBQUUsUUFIVjtBQUlGQyxjQUFRLEVBQUU7QUFKUixLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR0wsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQ2I7QUFBSyxRQUFFLEVBQUU7QUFBRUMsYUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLFNBQUMsRUFBRTtBQUFuQixPQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSw4Q0FBQyxrREFBRDtBQUFNLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxFQUFoQjtBQUFvQixVQUFJLEVBQUMsYUFBekI7QUFBdUMsUUFBRSxtQkFBWUgsSUFBSSxDQUFDRyxFQUFqQixDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxRQUFFLEVBQUU7QUFBRUMsc0JBQWMsRUFBRSxNQUFsQjtBQUEwQkMsY0FBTSxFQUFFO0FBQWxDLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssUUFBRSxFQUFFO0FBQUVYLGVBQU8sRUFBRTtBQUFYLE9BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU00sSUFBSSxDQUFDTSxLQUFkLENBREYsQ0FERixDQURGLENBREYsQ0FEYTtBQUFBLEdBQWQsQ0FSSCxDQUhGLENBREY7QUEwQkQsQ0E5QkQiLCJmaWxlIjoiLi9wYWdlcy9ub3Rlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBub3RlcyB9KSA9PiB7XG4gIC8vICAgY29uc3Qgbm90ZXMgPSBuZXcgQXJyYXkoMTUpXG4gIC8vICAgICAuZmlsbCgxKVxuICAvLyAgICAgLm1hcCgoZSwgaSkgPT4gKHsgaWQ6IGksIHRpdGxlOiBgVGhpcyBpcyBteSBub3RlICR7aX1gIH0pKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN4PXt7IHZhcmlhbnQ6ICdjb250YWluZXJzLnBhZ2UnIH19PlxuICAgICAgPGgxPk15IE5vdGVzPC9oMT5cblxuICAgICAgPGRpdlxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtub3Rlcy5tYXAobm90ZSA9PiAoXG4gICAgICAgICAgPGRpdiBzeD17eyB3aWR0aDogJzMzJScsIHA6IDIgfX0+XG4gICAgICAgICAgICA8TGluayBrZXk9e25vdGUuaWR9IGhyZWY9Jy9ub3Rlcy9baWRdJyBhcz17YC9ub3Rlcy8ke25vdGUuaWR9YH0+XG4gICAgICAgICAgICAgIDxhIHN4PXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3g9e3sgdmFyaWFudDogJ2NvbnRhaW5lcnMuY2FyZCcgfX0+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntub3RlLnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ub3RlL2ApO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgbm90ZXM6IGRhdGEgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/notes/index.jsx\n");

/***/ })

});