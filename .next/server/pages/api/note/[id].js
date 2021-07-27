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
exports.id = "pages/api/note/[id]";
exports.ids = ["pages/api/note/[id]"];
exports.modules = {

/***/ "./pages/api/note/[id].js":
/*!********************************!*\
  !*** ./pages/api/note/[id].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst getNote = id => _src_data_data__WEBPACK_IMPORTED_MODULE_1___default().find(n => n.id === parseInt(id));\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  res.json({\n    data: note\n  });\n}).patch((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default().findIndex(n => n.id === parseInt(req.query.id));\n\n  const updated = _objectSpread(_objectSpread({}, note), req.body);\n\n  (_src_data_data__WEBPACK_IMPORTED_MODULE_1___default())[i] = updated;\n  res.json({\n    data: updated\n  });\n}).delete((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default().findIndex(n => n.id === parseInt(req.query.id));\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default().splice(i, 1);\n  res.json({\n    data: req.query.id\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmFzaWMvLi9wYWdlcy9hcGkvbm90ZS9baWRdLmpzPzhhMWIiXSwibmFtZXMiOlsiZ2V0Tm90ZSIsImlkIiwibm90ZXMiLCJuIiwicGFyc2VJbnQiLCJoYW5kbGVyIiwibmMiLCJnZXQiLCJyZXEiLCJyZXMiLCJub3RlIiwicXVlcnkiLCJzdGF0dXMiLCJlbmQiLCJqc29uIiwiZGF0YSIsInBhdGNoIiwiaSIsInVwZGF0ZWQiLCJib2R5IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHQyxFQUFFLElBQUlDLDBEQUFBLENBQVdDLENBQUMsSUFBSUEsQ0FBQyxDQUFDRixFQUFGLEtBQVNHLFFBQVEsQ0FBQ0gsRUFBRCxDQUFqQyxDQUF0Qjs7QUFFQSxNQUFNSSxPQUFPLEdBQUdDLG1EQUFFLEdBQ2JDLEdBRFcsQ0FDUCxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUVmLFFBQU1DLElBQUksR0FBR1YsT0FBTyxDQUFDUSxHQUFHLENBQUNHLEtBQUosQ0FBVVYsRUFBWCxDQUFwQjs7QUFFQSxNQUFJLENBQUNTLElBQUwsRUFBVztBQUNQRCxPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYO0FBQ0FILE9BQUcsQ0FBQ0ksR0FBSjtBQUNBO0FBQ0g7O0FBRURKLEtBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRUw7QUFBUixHQUFUO0FBQ0gsQ0FaVyxFQWFYTSxLQWJXLENBYUwsQ0FBQ1IsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDakIsUUFBTUMsSUFBSSxHQUFHVixPQUFPLENBQUNRLEdBQUcsQ0FBQ0csS0FBSixDQUFVVixFQUFYLENBQXBCOztBQUVBLE1BQUksQ0FBQ1MsSUFBTCxFQUFXO0FBQ1BELE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVg7QUFDQUgsT0FBRyxDQUFDSSxHQUFKO0FBQ0E7QUFDSDs7QUFFRCxRQUFNSSxDQUFDLEdBQUdmLCtEQUFBLENBQWdCQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0YsRUFBRixLQUFTRyxRQUFRLENBQUNJLEdBQUcsQ0FBQ0csS0FBSixDQUFVVixFQUFYLENBQXRDLENBQVY7O0FBQ0EsUUFBTWlCLE9BQU8sbUNBQVFSLElBQVIsR0FBaUJGLEdBQUcsQ0FBQ1csSUFBckIsQ0FBYjs7QUFFQWpCLHlEQUFLLENBQUNlLENBQUQsQ0FBTCxHQUFXQyxPQUFYO0FBQ0FULEtBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRUc7QUFBUixHQUFUO0FBQ0gsQ0EzQlcsRUE0QlhFLE1BNUJXLENBNEJKLENBQUNaLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ2xCLFFBQU1DLElBQUksR0FBR1YsT0FBTyxDQUFDUSxHQUFHLENBQUNHLEtBQUosQ0FBVVYsRUFBWCxDQUFwQjs7QUFFQSxNQUFJLENBQUNTLElBQUwsRUFBVztBQUNQRCxPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYO0FBQ0FILE9BQUcsQ0FBQ0ksR0FBSjtBQUNBO0FBQ0g7O0FBQ0QsUUFBTUksQ0FBQyxHQUFHZiwrREFBQSxDQUFnQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNGLEVBQUYsS0FBU0csUUFBUSxDQUFDSSxHQUFHLENBQUNHLEtBQUosQ0FBVVYsRUFBWCxDQUF0QyxDQUFWO0FBRUFDLDhEQUFBLENBQWFlLENBQWIsRUFBZ0IsQ0FBaEI7QUFFQVIsS0FBRyxDQUFDSyxJQUFKLENBQVM7QUFBRUMsUUFBSSxFQUFFUCxHQUFHLENBQUNHLEtBQUosQ0FBVVY7QUFBbEIsR0FBVDtBQUNILENBekNXLENBQWhCO0FBNENBLCtEQUFlSSxPQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25vdGUvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnXG5pbXBvcnQgbm90ZXMgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvZGF0YSdcblxuY29uc3QgZ2V0Tm90ZSA9IGlkID0+IG5vdGVzLmZpbmQobiA9PiBuLmlkID09PSBwYXJzZUludChpZCkpXG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpXG4gICAgLmdldCgocmVxLCByZXMpID0+IHtcblxuICAgICAgICBjb25zdCBub3RlID0gZ2V0Tm90ZShyZXEucXVlcnkuaWQpXG5cbiAgICAgICAgaWYgKCFub3RlKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgICAgICAgIHJlcy5lbmQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICByZXMuanNvbih7IGRhdGE6IG5vdGUgfSlcbiAgICB9KVxuICAgIC5wYXRjaCgocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKVxuXG4gICAgICAgIGlmICghbm90ZSkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpXG4gICAgICAgICAgICByZXMuZW5kKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaSA9IG5vdGVzLmZpbmRJbmRleChuID0+IG4uaWQgPT09IHBhcnNlSW50KHJlcS5xdWVyeS5pZCkpXG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLm5vdGUsIC4uLnJlcS5ib2R5IH1cblxuICAgICAgICBub3Rlc1tpXSA9IHVwZGF0ZWRcbiAgICAgICAgcmVzLmpzb24oeyBkYXRhOiB1cGRhdGVkIH0pXG4gICAgfSlcbiAgICAuZGVsZXRlKChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBub3RlID0gZ2V0Tm90ZShyZXEucXVlcnkuaWQpXG5cbiAgICAgICAgaWYgKCFub3RlKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgICAgICAgIHJlcy5lbmQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaSA9IG5vdGVzLmZpbmRJbmRleChuID0+IG4uaWQgPT09IHBhcnNlSW50KHJlcS5xdWVyeS5pZCkpXG5cbiAgICAgICAgbm90ZXMuc3BsaWNlKGksIDEpXG5cbiAgICAgICAgcmVzLmpzb24oeyBkYXRhOiByZXEucXVlcnkuaWQgfSlcbiAgICB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/note/[id].js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/note/[id].js"));
module.exports = __webpack_exports__;

})();