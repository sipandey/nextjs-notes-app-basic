/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/note";
exports.ids = ["pages/api/note"];
exports.modules = {

/***/ "./pages/api/note/index.js":
/*!*********************************!*\
  !*** ./pages/api/note/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {\n  res.json({\n    data: (_src_data_data__WEBPACK_IMPORTED_MODULE_1___default())\n  });\n}).post((req, res) => {\n  const id = Date.now();\n\n  const note = _objectSpread(_objectSpread({}, req.body), {}, {\n    id\n  });\n\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default().push(note);\n  res.json({\n    data: note\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmFzaWMvLi9wYWdlcy9hcGkvbm90ZS9pbmRleC5qcz9mOTBiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJuYyIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJkYXRhIiwibm90ZXMiLCJwb3N0IiwiaWQiLCJEYXRlIiwibm93Iiwibm90ZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsbURBQUUsR0FDYkMsR0FEVyxDQUNQLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ2ZBLEtBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRUMsdURBQUtBO0FBQWIsR0FBVDtBQUNILENBSFcsRUFJWEMsSUFKVyxDQUlOLENBQUNMLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ2hCLFFBQU1LLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVg7O0FBQ0EsUUFBTUMsSUFBSSxtQ0FBUVQsR0FBRyxDQUFDVSxJQUFaO0FBQWtCSjtBQUFsQixJQUFWOztBQUVBRiw0REFBQSxDQUFXSyxJQUFYO0FBQ0FSLEtBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRU07QUFBUixHQUFUO0FBQ0gsQ0FWVyxDQUFoQjtBQVdBLCtEQUFlWixPQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25vdGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0J1xuaW1wb3J0IG5vdGVzIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL2RhdGEnXG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpXG4gICAgLmdldCgocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVzLmpzb24oeyBkYXRhOiBub3RlcyB9KVxuICAgIH0pXG4gICAgLnBvc3QoKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKVxuICAgICAgICBjb25zdCBub3RlID0geyAuLi5yZXEuYm9keSwgaWQgfVxuXG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSlcbiAgICAgICAgcmVzLmpzb24oeyBkYXRhOiBub3RlIH0pXG4gICAgfSlcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/note/index.js\n");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ (function(module) {

eval("const notes = new Array(15).fill(1).map((_, i) => ({\n  id: Date.now() + i,\n  title: `Note ${i}`\n}));\nmodule.exports = notes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmFzaWMvLi9zcmMvZGF0YS9kYXRhLmpzP2Q1YzciXSwibmFtZXMiOlsibm90ZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxFQUFWLEVBQ1RDLElBRFMsQ0FDSixDQURJLEVBRVRDLEdBRlMsQ0FFTCxDQUFDQyxDQUFELEVBQUlDLENBQUosTUFBVztBQUNaQyxFQUFBQSxFQUFFLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxLQUFhSCxDQURMO0FBRVpJLEVBQUFBLEtBQUssRUFBRyxRQUFPSixDQUFFO0FBRkwsQ0FBWCxDQUZLLENBQWQ7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxLQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vdGVzID0gbmV3IEFycmF5KDE1KVxuICAgIC5maWxsKDEpXG4gICAgLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgaWQ6IERhdGUubm93KCkgKyBpLFxuICAgICAgICB0aXRsZTogYE5vdGUgJHtpfWBcbiAgICB9KSlcblxubW9kdWxlLmV4cG9ydHMgPSBub3RlcyJdLCJmaWxlIjoiLi9zcmMvZGF0YS9kYXRhLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/data.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/note/index.js"));
module.exports = __webpack_exports__;

})();