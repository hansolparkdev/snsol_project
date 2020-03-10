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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_counterReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/counterReducer */ "./redux/reducers/counterReducer.js");
/* harmony import */ var _redux_reducers_sagaCounterReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/sagaCounterReducer */ "./redux/reducers/sagaCounterReducer.js");
/* harmony import */ var _redux_reducers_thunkCounterReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/thunkCounterReducer */ "./redux/reducers/thunkCounterReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Index = () => {
  const {
    value
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.counter, []);
  const {
    sagaValue
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.sagaCounter, []);
  const {
    thunkValue
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.thunkCounter, []);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const incrementBtn = () => {
    dispatch(Object(_redux_reducers_counterReducer__WEBPACK_IMPORTED_MODULE_3__["increment"])());
  };

  const decrementBtn = () => {
    dispatch(Object(_redux_reducers_counterReducer__WEBPACK_IMPORTED_MODULE_3__["decrement"])());
  };

  const sagaIncrementBtn = () => {
    dispatch(Object(_redux_reducers_sagaCounterReducer__WEBPACK_IMPORTED_MODULE_4__["sagaIncrement"])());
  };

  const sagaDecrementBtn = () => {
    dispatch(Object(_redux_reducers_sagaCounterReducer__WEBPACK_IMPORTED_MODULE_4__["sagaDecrement"])());
  };

  const thunkIncrementBtn = () => {
    dispatch(Object(_redux_reducers_thunkCounterReducer__WEBPACK_IMPORTED_MODULE_5__["thunkIncrementAsync"])());
  };

  const thunkDecrementBtn = () => {
    dispatch(Object(_redux_reducers_thunkCounterReducer__WEBPACK_IMPORTED_MODULE_5__["thunkDecrementAsync"])());
  };

  const foo = () => {
    console.log('aaa');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    id: "content",
    className: "jsx-2476308003"
  }, __jsx("div", {
    className: "jsx-2476308003" + " " + "left_content"
  }, __jsx("div", {
    className: "jsx-2476308003" + " " + "card"
  }, __jsx("div", {
    className: "jsx-2476308003"
  }, __jsx("span", {
    className: "jsx-2476308003"
  }, "\uD504\uB85C\uD544\uC0AC\uC9C4"), __jsx("span", {
    className: "jsx-2476308003"
  }, "\uC774\uB984")), __jsx("div", {
    className: "jsx-2476308003"
  }, "\uC774\uBBF8\uC9C0\uC2AC\uB77C\uC774\uB4DC"), __jsx("div", {
    className: "jsx-2476308003"
  }, __jsx("button", {
    onClick: foo,
    onKeyDown: foo,
    type: "button",
    className: "jsx-2476308003"
  }, __jsx("span", {
    className: "jsx-2476308003"
  }, "\uC88B\uC544\uC694"), __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-2476308003" + " " + "fa fa-heart-o"
  })), __jsx("span", {
    className: "jsx-2476308003"
  }, "\uB313\uAE00")))), __jsx("div", {
    className: "jsx-2476308003" + " " + "right_content"
  }, "profile"), __jsx("div", {
    className: "jsx-2476308003"
  }, __jsx("div", {
    className: "jsx-2476308003"
  }, "\uAE30\uBCF8 \uB9AC\uB355\uC2A4", __jsx("div", {
    className: "jsx-2476308003"
  }, value), __jsx("button", {
    onClick: incrementBtn,
    type: "button",
    className: "jsx-2476308003"
  }, "\uC99D\uAC00"), __jsx("button", {
    onClick: decrementBtn,
    type: "button",
    className: "jsx-2476308003"
  }, "\uAC10\uC18C"))), __jsx("div", {
    className: "jsx-2476308003"
  }, __jsx("div", {
    className: "jsx-2476308003"
  }, "\uB9AC\uB355\uC2A4 \uC0AC\uAC00", __jsx("div", {
    className: "jsx-2476308003"
  }, sagaValue), __jsx("button", {
    onClick: sagaIncrementBtn,
    type: "button",
    className: "jsx-2476308003"
  }, "\uC99D\uAC00"), __jsx("button", {
    onClick: sagaDecrementBtn,
    type: "button",
    className: "jsx-2476308003"
  }, "\uAC10\uC18C"))), __jsx("div", {
    className: "jsx-2476308003"
  }, __jsx("div", {
    className: "jsx-2476308003"
  }, "\uB9AC\uB355\uC2A4 Thunk", __jsx("div", {
    className: "jsx-2476308003"
  }, thunkValue), __jsx("button", {
    onClick: thunkIncrementBtn,
    type: "button",
    className: "jsx-2476308003"
  }, "\uC99D\uAC00"), __jsx("button", {
    onClick: thunkDecrementBtn,
    type: "button",
    className: "jsx-2476308003"
  }, "\uAC10\uC18C")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2476308003"
  }, "#content.jsx-2476308003{margin:10px 0;overflow:hidden;}.left_content.jsx-2476308003{float:left;width:69%;margin-right:1%;}.right_content.jsx-2476308003{float:left;width:30%;height:500px;background-color:blue;}.card.jsx-2476308003{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRlMsQUFHMkIsQUFJSixBQUtBLEFBTUMsV0FWRixBQUtBLENBTVgsRUFmaUIsT0FLQyxBQUtKLFNBVGQsSUFVdUIsR0FMdkIsbUJBTUEiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHNuc29sX3Byb2plY3RcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluY3JlbWVudCwgZGVjcmVtZW50IH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBzYWdhSW5jcmVtZW50LCBzYWdhRGVjcmVtZW50IH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvc2FnYUNvdW50ZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgdGh1bmtJbmNyZW1lbnRBc3luYywgdGh1bmtEZWNyZW1lbnRBc3luYyB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3RodW5rQ291bnRlclJlZHVjZXInO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLCBbXSk7XHJcbiAgY29uc3QgeyBzYWdhVmFsdWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUNvdW50ZXIsIFtdKTtcclxuICBjb25zdCB7IHRodW5rVmFsdWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudGh1bmtDb3VudGVyLCBbXSk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpbmNyZW1lbnRCdG4gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChpbmNyZW1lbnQoKSk7XHJcbiAgfTtcclxuICBjb25zdCBkZWNyZW1lbnRCdG4gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChkZWNyZW1lbnQoKSk7XHJcbiAgfTtcclxuICBjb25zdCBzYWdhSW5jcmVtZW50QnRuID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2FnYUluY3JlbWVudCgpKTtcclxuICB9O1xyXG4gIGNvbnN0IHNhZ2FEZWNyZW1lbnRCdG4gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzYWdhRGVjcmVtZW50KCkpO1xyXG4gIH07XHJcbiAgY29uc3QgdGh1bmtJbmNyZW1lbnRCdG4gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh0aHVua0luY3JlbWVudEFzeW5jKCkpO1xyXG4gIH07XHJcbiAgY29uc3QgdGh1bmtEZWNyZW1lbnRCdG4gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh0aHVua0RlY3JlbWVudEFzeW5jKCkpO1xyXG4gIH07XHJcbiAgY29uc3QgZm9vID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2FhYScpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+7ZSE66Gc7ZWE7IKs7KeEPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuydtOumhDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAg7J2066+47KeA7Iqs65287J2065OcXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Zm9vfSBvbktleURvd249e2Zvb30gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+7KKL7JWE7JqUPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+64yT6riAPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfY29udGVudFwiPnByb2ZpbGU8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAg6riw67O4IOumrOuNleyKpFxyXG4gICAgICAgICAgICA8ZGl2Pnt2YWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnRCdG59IHR5cGU9XCJidXR0b25cIj7spp3qsIA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWNyZW1lbnRCdG59IHR5cGU9XCJidXR0b25cIj7qsJDshow8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICDrpqzrjZXsiqQg7IKs6rCAXHJcbiAgICAgICAgICAgIDxkaXY+eyBzYWdhVmFsdWUgfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhZ2FJbmNyZW1lbnRCdG59IHR5cGU9XCJidXR0b25cIj7spp3qsIA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYWdhRGVjcmVtZW50QnRufSB0eXBlPVwiYnV0dG9uXCI+6rCQ7IaMPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAg66as642V7IqkIFRodW5rXHJcbiAgICAgICAgICAgIDxkaXY+eyB0aHVua1ZhbHVlIH08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aHVua0luY3JlbWVudEJ0bn0gdHlwZT1cImJ1dHRvblwiPuymneqwgDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RodW5rRGVjcmVtZW50QnRufSB0eXBlPVwiYnV0dG9uXCI+6rCQ7IaMPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgICNjb250ZW50e1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnRfY29udGVudHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NjklO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0X2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwMHB4OyAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJke1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\index.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./redux/reducers/counterReducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/counterReducer.js ***!
  \******************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, increment, decrement, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Action Types
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'; // Action Creator

const increment = () => ({
  type: INCREMENT_COUNTER
});
const decrement = () => ({
  type: DECREMENT_COUNTER
});
const initialState = {
  value: 1
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return _objectSpread({}, state, {
        value: state.value + 1
      });

    case DECREMENT_COUNTER:
      return _objectSpread({}, state, {
        value: state.value - 1
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (counterReducer);

/***/ }),

/***/ "./redux/reducers/sagaCounterReducer.js":
/*!**********************************************!*\
  !*** ./redux/reducers/sagaCounterReducer.js ***!
  \**********************************************/
/*! exports provided: SAGA_UP, SAGA_DOWN, SAGA_UP_ASYNC, SAGA_DOWN_ASYNC, sagaIncrement, sagaDecrement, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_UP", function() { return SAGA_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_DOWN", function() { return SAGA_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_UP_ASYNC", function() { return SAGA_UP_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_DOWN_ASYNC", function() { return SAGA_DOWN_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaIncrement", function() { return sagaIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaDecrement", function() { return sagaDecrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SAGA_UP = 'SAGA_UP';
const SAGA_DOWN = 'SAGA_DOWN';
const SAGA_UP_ASYNC = 'SAGA_UP_ASYNC';
const SAGA_DOWN_ASYNC = 'SAGA_DOWN_ASYNC';
const sagaIncrement = () => ({
  type: SAGA_UP,
  value: 1
});
const sagaDecrement = () => ({
  type: SAGA_DOWN,
  value: 1
});
const initialState = {
  sagaValue: 1
};

const sagaCounterReducer = (state = initialState, action) => {
  const newState = _objectSpread({}, state);

  switch (action.type) {
    case SAGA_UP_ASYNC:
      newState.sagaValue += action.value;
      break;

    case SAGA_DOWN_ASYNC:
      newState.sagaValue -= action.value;
      break;

    default:
      return newState;
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (sagaCounterReducer);

/***/ }),

/***/ "./redux/reducers/thunkCounterReducer.js":
/*!***********************************************!*\
  !*** ./redux/reducers/thunkCounterReducer.js ***!
  \***********************************************/
/*! exports provided: THUNK_UP_COUNTER, THUNK_DOWN_COUNTER, thunkIncrement, thunkDecrement, thunkIncrementAsync, thunkDecrementAsync, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THUNK_UP_COUNTER", function() { return THUNK_UP_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THUNK_DOWN_COUNTER", function() { return THUNK_DOWN_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkIncrement", function() { return thunkIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkDecrement", function() { return thunkDecrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkIncrementAsync", function() { return thunkIncrementAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkDecrementAsync", function() { return thunkDecrementAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const THUNK_UP_COUNTER = 'THUNK_UP_COUNTER';
const THUNK_DOWN_COUNTER = 'THUNK_DOWN_COUNTER';
const thunkIncrement = () => ({
  type: THUNK_UP_COUNTER,
  value: 3
});
const thunkDecrement = () => ({
  type: THUNK_DOWN_COUNTER,
  value: 3
});
const thunkIncrementAsync = () => dispatch => {
  setTimeout(() => {
    // 1 초뒤 dispatch 합니다
    dispatch(thunkIncrement());
  }, 1000);
};
const thunkDecrementAsync = () => dispatch => {
  setTimeout(() => {
    // 1 초뒤 dispatch 합니다
    dispatch(thunkDecrement());
  }, 1000);
};
const initialState = {
  value: 1,
  sagaValue: 1,
  thunkValue: 1
};

const thunkCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case THUNK_UP_COUNTER:
      return _objectSpread({}, state, {
        thunkValue: state.thunkValue + action.value
      });

    case THUNK_DOWN_COUNTER:
      return _objectSpread({}, state, {
        thunkValue: state.thunkValue - action.value
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (thunkCounterReducer);

/***/ }),

/***/ 3:
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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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