/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Branda-yolq.ttf */ \"./src/fonts/Branda-yolq.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CreamySugar-gxnGR.ttf */ \"./src/fonts/CreamySugar-gxnGR.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'Branda';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('trueType');\n}\n\n@font-face {\n  font-family: 'Creamy_Sugar';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('trueType');\n}\n\n#content {\n  height: 100%;\n  width: 100vw;\n  background-color: chartreuse;\n  display: grid;\n  grid-template-rows: 13vh 41vh 46vh;\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 9vh 4vh;\n}\n\n.nav-top {\n  width: 30vw;\n  height: 9vh;\n  float: right;\n  display: grid;\n  grid-template-rows: repeat(2, 4.5vh);\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  grid-template-areas: \"address links\"\n                       \"search contact\";\n}\n\n.nav-top * {\n  height: 2vh;\n}\n\n#links {\n  display: inline-flex;\n}\n\n#address {\n  padding-top: 10px;\n  font-size: 1.2vh;\n}\n\n#search input {\n width: 7vw;\n}\n\n.nav-bottom {\n  justify-content: center;\n  display: inline-flex;\n  font-family: 'Branda';\n  background-color: beige;\n}\n\n.nav-bottom > :last-child {\n  width: 50vw;\n  display: grid;\n  margin-top: 1vh;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n#logo-cont {\n  width: 200px;\n}\n\n#brand-logo {\n  height: 20vh;\n  width: 10vw;\n  position: absolute;\n  top: 2vh;\n  left: 7vw;\n}\n\n\n.main {\n  background-color: brown;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\naside {\n  background-color: darkblue;\n  display: grid;\n  grid-template-rows: repeat(4 auto);\n  padding: 5vh 1vw 1vw 1vw;\n  font-size: 1.7vh;\n}\n\n.p-header:not(footer h3) {\n  color: rgb(98, 138, 179);\n}\n\naside :nth-child(3),\naside button {\n  margin: auto;\n}\n\naside :nth-child(3) * {\n  display: inline-flex;\n  vertical-align: middle;\n}\n\naside > button {\n  width: 7vw;\n  height: 3vh;\n  font-size: 1vh;\n}\n\naside img {\n  height: 5vh;\n}\n\narticle {\n  background-size: 100% 100%;\n}\n\n\nfooter {\n  width: 70vw;\n  background-color: gold;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  padding: 0 15vw;\n  justify-items: center;\n}\n\nfooter h3 {\n  font-family: 'Creamy_Sugar';\n  padding-top: 2vh;\n  font-size: 3.2vh;\n  color: darkred;\n}\n\nfooter > :last-child {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  gap: 3vw;\n  justify-content: center;\n}\n\nfooter h5 {\n  font-size: 2vh;\n  font-weight: bold;\n}\n\n.list-cont {\n  padding-top: 1vh;\n}\n\n.list-cont * {\n  padding-bottom: 1.5vh;\n}\n\nfooter em {\n  font-size: 1.7vh;\n}\n\nfooter li {\n  font-size: 1.4vh;\n}\n\n/* SubPages */\n.newContent {\n  font-size: 3vh;\n  font-weight: bold;\n  color: peru;\n}\n\n.newContent em {\n  font-size: 10vh;\n  color:maroon;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.css?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/footer/footer.js":
/*!******************************!*\
  !*** ./src/footer/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./src/helper.js\");\n/* harmony import */ var _list_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_left */ \"./src/footer/list_left.js\");\n/* harmony import */ var _list_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_right */ \"./src/footer/list_right.js\");\n\n\n\n\nconst footer = document.createElement('footer')\n\n\n// Header\nconst head = document.createElement('h3')\nhead.className = 'p-header'\nhead.innerHTML = 'Below is our complete menu, check what you feel like dining for today'\nfooter.appendChild(head)\n\n\n// Contents\nconst footContent = document.createElement('div')\n\nconst listContents = [ \"<em class='p-header'> Street nachos </em><br> Sed tempus u lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilicis felis accumsan nec.\",\n                       \"<em class='p-header'> Hummus </em><br> Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque se dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem purus, dignissim ut sapien in, varius pellentesque lacus.\",\n                       \"<em class='p-header'> Peel N'eat Shrimp </em><br> In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a palceratt velit sagittis id.\",\n                       \"<em class='p-header'> Wings </em><br> Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna eget accusam aliquam. Curabitur dignissim nisi in tortor comodo, ac bibendum magna tincidunt.\",\n                       \"<em class='p-header'> Giant Pretzel </em><br> Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis. Aliquam sed malesuada eros.\",\n                       \"<em class='p-header'> Wisconsin White Cheddar Cheese Curds </em><br> Praesent convallis, libero quis congue elementum, nunc ante faubicus sapien, ac scelerisque tortor purus sit amet ex. pelentesque mollis nec sem vel aliquam.\"\n                     ]\n\n// generate list items and append to their corresponding parent ul element\n;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateChildElements)('li', _list_left__WEBPACK_IMPORTED_MODULE_1__.listLeft, listContents)\n;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateChildElements)('li', _list_right__WEBPACK_IMPORTED_MODULE_2__.listRight, listContents)\n\n\nfootContent.appendChild(_list_left__WEBPACK_IMPORTED_MODULE_1__.listLeft)\nfootContent.appendChild(_list_right__WEBPACK_IMPORTED_MODULE_2__.listRight)\n\nfooter.appendChild(footContent)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer/footer.js?");

/***/ }),

/***/ "./src/footer/list_left.js":
/*!*********************************!*\
  !*** ./src/footer/list_left.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listLeft: () => (/* binding */ listLeft)\n/* harmony export */ });\nconst listLeft = document.createElement('ul')\nconst headerLeft = document.createElement('h5')\n\nlistLeft.className = 'list-cont'\nheaderLeft.innerHTML = 'Shareables'\n\nlistLeft.appendChild(headerLeft)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer/list_left.js?");

/***/ }),

/***/ "./src/footer/list_right.js":
/*!**********************************!*\
  !*** ./src/footer/list_right.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listRight: () => (/* binding */ listRight)\n/* harmony export */ });\nconst listRight = document.createElement('ul')\nconst headerRight = document.createElement('h5')\n\nlistRight.className = 'list-cont'\nheaderRight.innerHTML = 'Signature Meals'\n\nlistRight.appendChild(headerRight)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer/list_right.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendImages: () => (/* binding */ appendImages),\n/* harmony export */   generateChildElements: () => (/* binding */ generateChildElements),\n/* harmony export */   setNewContents: () => (/* binding */ setNewContents),\n/* harmony export */   wipeHomeContents: () => (/* binding */ wipeHomeContents)\n/* harmony export */ });\nfunction generateChildElements(tag, parent, contents) {\n  for (let i=0; i<contents.length; i++) {\n    const el = document.createElement(`${tag}`);\n\n    const content = contents[i]\n\n    el.innerHTML = content\n\n    el.id = content\n\n    parent.appendChild(el);\n  }\n}\n\nfunction appendImages(tag, parent, contents) {\n  for (let i=0; i<contents.length; i++) {\n    const el = document.createElement(`${tag}`);\n\n    const content = contents[i]\n\n    const image = new Image()\n    image.src = content\n\n    el.appendChild(image)\n\n    parent.appendChild(el);\n  }\n}\n\nfunction wipeHomeContents() {\n  const homeContents = document.getElementById('content')\n\n  homeContents.querySelectorAll('*').forEach(n => n.remove());\n\n  homeContents.style = \"display: block; background-color: unset\"\n\n  return homeContents\n}\n\nfunction setNewContents(newContent) {\n  const contentContainer = document.createElement('div')\n\n  contentContainer.className = 'newContent'\n\n  contentContainer.appendChild(newContent)\n\n  return contentContainer\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.js */ \"./src/nav/nav.js\");\n/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.js */ \"./src/main/main.js\");\n/* harmony import */ var _footer_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.js */ \"./src/footer/footer.js\");\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\n\nconst content = document.createElement('div');\ncontent.id = 'content'\n\nfunction component() {\n\n  content.appendChild(_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.nav)\n  content.appendChild(_main_main_js__WEBPACK_IMPORTED_MODULE_1__.main)\n  content.appendChild(_footer_footer_js__WEBPACK_IMPORTED_MODULE_2__.footer)\n\n  return content;\n}\n\ndocument.body.appendChild(component());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _side_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side.js */ \"./src/main/side.js\");\n/* harmony import */ var _images_restaurant_food_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/restaurant-food.jpg */ \"./src/images/restaurant-food.jpg\");\n\n\n\nconst main = document.createElement('div')\nmain.className = 'main'\n\nmain.appendChild(_side_js__WEBPACK_IMPORTED_MODULE_0__.side)\n\nconst article = document.createElement('article')\narticle.style.backgroundImage = `url(${_images_restaurant_food_jpg__WEBPACK_IMPORTED_MODULE_1__})`\n\nmain.appendChild(article)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/main/main.js?");

/***/ }),

/***/ "./src/main/side.js":
/*!**************************!*\
  !*** ./src/main/side.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   side: () => (/* binding */ side)\n/* harmony export */ });\n/* harmony import */ var _images_icons_food_delivery_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icons/food-delivery.png */ \"./src/images/icons/food-delivery.png\");\n\n\nconst side = document.createElement('aside')\n\n// side1\nconst side1 = document.createElement('span')\nconst para1 = document.createElement('p')\n\npara1.innerHTML = \"<em class='p-header'>Menu</em><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"\n\nside1.appendChild(para1)\n\n\n// side2\nconst side2 = document.createElement('span')\nconst para2 = document.createElement('p')\n\npara2.innerHTML = \"<em class='p-header'>We Deliver</em><br> Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis.\"\n\nside2.appendChild(para2)\n\n\n// side3\nconst side3 = document.createElement('span')\nconst para3 = document.createElement('p')\nconst sideLogoCont = document.createElement('span')\n\nconst logo = new Image()\nlogo.src = _images_icons_food_delivery_png__WEBPACK_IMPORTED_MODULE_0__\n\npara3.innerHTML = \"GRAB PANDA\"\n\nsideLogoCont.appendChild(logo)\nside3.appendChild(sideLogoCont)\nside3.appendChild(para3)\n\n\n// button\nconst btn = document.createElement('button')\nbtn.innerHTML = 'Order Delivery >>'\n\n\nside.appendChild(side1)\nside.appendChild(side2)\nside.appendChild(side3)\nside.appendChild(btn)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/main/side.js?");

/***/ }),

/***/ "./src/nav/nav.js":
/*!************************!*\
  !*** ./src/nav/nav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nav: () => (/* binding */ nav)\n/* harmony export */ });\n/* harmony import */ var _nav_top_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav_top.js */ \"./src/nav/nav_top.js\");\n/* harmony import */ var _nav_bottom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav_bottom.js */ \"./src/nav/nav_bottom.js\");\n\n\n\nconst nav = document.createElement('nav')\nconst navCont = document.createElement('div')\n\nnavCont.appendChild(_nav_top_js__WEBPACK_IMPORTED_MODULE_0__.navTop)\n\nnav.appendChild(navCont)\nnav.appendChild(_nav_bottom_js__WEBPACK_IMPORTED_MODULE_1__.navBottom)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav/nav.js?");

/***/ }),

/***/ "./src/nav/nav_bottom.js":
/*!*******************************!*\
  !*** ./src/nav/nav_bottom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navBottom: () => (/* binding */ navBottom)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./src/helper.js\");\n/* harmony import */ var _images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/restaurant-logo.png */ \"./src/images/restaurant-logo.png\");\n\n\nconst navBottom = document.createElement('div');\nnavBottom.className = 'nav-bottom'\n\n;\n\n\n// logo\nconst logoCont = document.createElement('span')\nlogoCont.id = 'logo-cont'\nnavBottom.appendChild(logoCont)\n\nconst logoImg  = document.createElement('img')\nlogoImg.id = 'brand-logo'\nlogoImg.src = _images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_1__\n\nlogoCont.appendChild(logoImg)\n\n\n// app navigators\nconst navs = document.createElement('ul')\nconst navContents = ['Home', 'About', 'Menu', 'Contact', 'Branches']\n;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateChildElements)('li', navs, navContents)\nnavBottom.appendChild(navs)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav/nav_bottom.js?");

/***/ }),

/***/ "./src/nav/nav_top.js":
/*!****************************!*\
  !*** ./src/nav/nav_top.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navTop: () => (/* binding */ navTop)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./src/helper.js\");\n/* harmony import */ var _images_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/facebook.svg */ \"./src/images/icons/facebook.svg\");\n/* harmony import */ var _images_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/twitter.svg */ \"./src/images/icons/twitter.svg\");\n/* harmony import */ var _images_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icons/instagram.svg */ \"./src/images/icons/instagram.svg\");\n/* harmony import */ var _images_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icons/youtube.svg */ \"./src/images/icons/youtube.svg\");\n/* harmony import */ var _images_icons_pinterest_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icons/pinterest.svg */ \"./src/images/icons/pinterest.svg\");\n/* harmony import */ var _images_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icons/search-icon.svg */ \"./src/images/icons/search-icon.svg\");\n\n\n\n\n\n\n\n\n//nav top\nconst navTop = document.createElement('div');\nnavTop.className = 'nav-top'\n\n\n//address\nconst address = document.createElement('span');\naddress.id = 'address'\naddress.innerHTML = \"128, Sample street, People's Subd., Some City\"\nnavTop.appendChild(address)\n\n\n//links\nconst links = document.createElement('ul');\nlinks.id = 'links'\n\nconst images = [_images_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_1__, _images_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2__, _images_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_3__, _images_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_4__, _images_icons_pinterest_svg__WEBPACK_IMPORTED_MODULE_5__]\n;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendImages)('li', links, images)\n\nnavTop.appendChild(links)\n\n\n//search\nconst search = document.createElement('span');\nsearch.id = 'search'\n\nconst input = document.createElement('input');\ninput.type = 'text'\n\nconst searchIcon = new Image()\nsearchIcon.src = _images_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_6__\n\nsearch.appendChild(input)\nsearch.appendChild(searchIcon)\n\nnavTop.appendChild(search)\n\n\n//contact\nconst contact = document.createElement('span');\ncontact.id = 'contact'\ncontact.innerHTML = '756.808.225'\nnavTop.appendChild(contact)\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav/nav_top.js?");

/***/ }),

/***/ "./src/fonts/Branda-yolq.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Branda-yolq.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4810017209445a1fa312.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Branda-yolq.ttf?");

/***/ }),

/***/ "./src/fonts/CreamySugar-gxnGR.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/CreamySugar-gxnGR.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d4b629381643b588381.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/CreamySugar-gxnGR.ttf?");

/***/ }),

/***/ "./src/images/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/images/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25f258e4bb39a7967b5e.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/facebook.svg?");

/***/ }),

/***/ "./src/images/icons/food-delivery.png":
/*!********************************************!*\
  !*** ./src/images/icons/food-delivery.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00533a04275d87d7cd56.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/food-delivery.png?");

/***/ }),

/***/ "./src/images/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/images/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51f90461c0dfed370bf6.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/instagram.svg?");

/***/ }),

/***/ "./src/images/icons/pinterest.svg":
/*!****************************************!*\
  !*** ./src/images/icons/pinterest.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5da96c394120525c5978.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/pinterest.svg?");

/***/ }),

/***/ "./src/images/icons/search-icon.svg":
/*!******************************************!*\
  !*** ./src/images/icons/search-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a39a92e73e7ad797600.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/search-icon.svg?");

/***/ }),

/***/ "./src/images/icons/twitter.svg":
/*!**************************************!*\
  !*** ./src/images/icons/twitter.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77a2f5734999924fb343.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/twitter.svg?");

/***/ }),

/***/ "./src/images/icons/youtube.svg":
/*!**************************************!*\
  !*** ./src/images/icons/youtube.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ebca23b238db1fa7eba.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/youtube.svg?");

/***/ }),

/***/ "./src/images/restaurant-food.jpg":
/*!****************************************!*\
  !*** ./src/images/restaurant-food.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a78321feaf9ba56083b7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant-food.jpg?");

/***/ }),

/***/ "./src/images/restaurant-logo.png":
/*!****************************************!*\
  !*** ./src/images/restaurant-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42c9de03cecd3dd0e103.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant-logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;