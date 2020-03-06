module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Index = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
  id: "content",
  className: "jsx-3311706747"
}, __jsx("div", {
  className: "jsx-3311706747" + " " + "left_content"
}, __jsx("div", {
  id: "card",
  className: "jsx-3311706747"
}, __jsx("div", {
  className: "jsx-3311706747"
}, __jsx("span", {
  className: "jsx-3311706747"
}, "\uD504\uB85C\uD544\uC0AC\uC9C4"), __jsx("span", {
  className: "jsx-3311706747"
}, "\uC774\uB984")), __jsx("div", {
  className: "jsx-3311706747"
}, "\uC774\uBBF8\uC9C0\uC2AC\uB77C\uC774\uB4DC"), __jsx("div", {
  className: "jsx-3311706747"
}, __jsx("span", {
  className: "jsx-3311706747"
}, "\uC88B\uC544\uC694"), __jsx("span", {
  className: "jsx-3311706747"
}, "\uB313\uAE00")))), __jsx("div", {
  className: "jsx-3311706747" + " " + "right_content"
}, "profile")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3311706747"
}, "#content.jsx-3311706747{margin:10px 0;overflow:hidden;}.left_content.jsx-3311706747{float:left;width:69%;background-color:blue;margin-right:1%;}.right_content.jsx-3311706747{float:left;width:30%;height:500px;background-color:blue;}#card.jsx-3311706747{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qk8sQUFHeUIsQUFJSixBQU1BLEFBTUMsV0FYRixBQU1BLENBTVgsRUFoQmlCLE9BS00sQUFNVCxTQVZkLElBV3VCLFNBTkwsYUFPbEIsR0FOQSIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8RnJhZ21lbnQ+XHJcbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj7tlITroZztlYTsgqzsp4Q8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPuydtOumhDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAg7J2066+47KeA7Iqs65287J2065OcXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPuyii+yVhOyalDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+64yT6riAPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X2NvbnRlbnRcIj5wcm9maWxlPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgI2NvbnRlbnR7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnRfY29udGVudHtcclxuICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDo2OSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHRfY29udGVudHtcclxuICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6NTAwcHg7ICBcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NhcmR7XHJcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvRnJhZ21lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\index.jsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desktop\snsol_project\frontend\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map