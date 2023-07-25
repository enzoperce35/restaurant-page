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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n\n\nconst newContent = document.createElement('p')\nnewContent.innerHTML = \"<em>Restaurant Contacts</em> <br> This is a JS Webpack splitted modular page\"\n\nconst contactLink =  document.getElementById('Contact')\n\ncontactLink.addEventListener('click', () => {\n  const homeContents = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.wipeHomeContents)()\n  const newContents  = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.setNewContents)(newContent)\n\n  homeContents.appendChild(newContents)\n\n  document.body.appendChild(homeContents);\n})\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendImages: () => (/* binding */ appendImages),\n/* harmony export */   generateChildElements: () => (/* binding */ generateChildElements),\n/* harmony export */   setNewContents: () => (/* binding */ setNewContents),\n/* harmony export */   wipeHomeContents: () => (/* binding */ wipeHomeContents)\n/* harmony export */ });\nfunction generateChildElements(tag, parent, contents) {\n  for (let i=0; i<contents.length; i++) {\n    const el = document.createElement(`${tag}`);\n\n    const content = contents[i]\n\n    el.innerHTML = content\n\n    el.id = content\n\n    parent.appendChild(el);\n  }\n}\n\nfunction appendImages(tag, parent, contents) {\n  for (let i=0; i<contents.length; i++) {\n    const el = document.createElement(`${tag}`);\n\n    const content = contents[i]\n\n    const image = new Image()\n    image.src = content\n\n    el.appendChild(image)\n\n    parent.appendChild(el);\n  }\n}\n\nfunction wipeHomeContents() {\n  const homeContents = document.getElementById('content')\n\n  homeContents.querySelectorAll('*').forEach(n => n.remove());\n\n  homeContents.style = \"display: block; background-color: unset\"\n\n  return homeContents\n}\n\nfunction setNewContents(newContent) {\n  const contentContainer = document.createElement('div')\n\n  contentContainer.className = 'newContent'\n\n  contentContainer.appendChild(newContent)\n\n  return contentContainer\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/helper.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/contact.js");
/******/ 	
/******/ })()
;