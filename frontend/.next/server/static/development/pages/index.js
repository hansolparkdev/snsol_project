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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/login/Login.jsx":
/*!************************************!*\
  !*** ./components/login/Login.jsx ***!
  \************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/anchor-is-valid */








const CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
  root: {
    '& label.Mui-focused': {
      color: 'gray'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#BDBDBD'
      },
      '&:hover fieldset': {
        borderColor: '#BDBDBD'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#BDBDBD'
      }
    }
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"]);
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(0)
  }
}));
const Login = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const login = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.sagaLogin, []);
  const {
    username,
    password
  } = login;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const idInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const pwInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const data = () => {
      if (login.loginStatus === 'login_failed') {
        idInput.current.focus();
      }
    };

    data();
  }, [login]);

  const loginSubmitForm = e => {
    e.preventDefault();
    dispatch({
      type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__["DO_LOGIN"],
      payload: {
        username,
        password
      }
    });
  };

  return __jsx("div", {
    className: "jsx-3979854402" + " " + "loginForm"
  }, __jsx("div", {
    className: "jsx-3979854402"
  }, __jsx("h1", {
    className: "jsx-3979854402"
  }, "SNSOL \uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm,
    noValidate: true,
    className: "jsx-3979854402" + " " + (classes.root || "")
  }, __jsx("div", {
    className: "jsx-3979854402" + " " + "textInputForm"
  }, __jsx("div", {
    className: "jsx-3979854402" + " " + "inputForm"
  }, __jsx(CssTextField, {
    className: classes.margin,
    inputRef: idInput,
    fullWidth: true,
    value: username,
    variant: "outlined",
    label: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694.",
    size: "medium",
    onChange: e => {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__["SET_USERNAME"],
        payload: e.target.value
      });
    }
  })), __jsx("div", {
    className: "jsx-3979854402" + " " + "inputForm"
  }, __jsx(CssTextField, {
    className: classes.width,
    inputRef: pwInput,
    fullWidth: true,
    variant: "outlined",
    type: "password",
    value: password,
    autoComplete: "on",
    label: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
    size: "medium",
    onChange: e => {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__["SET_PASSWORD"],
        payload: e.target.value
      });
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: "lg",
    block: true,
    type: "submit"
  }, "\uB85C\uADF8\uC778"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: "lg",
    variant: "warning",
    block: true,
    type: "button"
  }, "KaKao \uB85C\uADF8\uC778")), __jsx("div", {
    className: "jsx-3979854402" + " " + "login_etc"
  }, __jsx("div", {
    className: "jsx-3979854402"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-3979854402"
  }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx("div", {
    className: "jsx-3979854402"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-3979854402"
  }, "\uC544\uC774\uB514 \uCC3E\uAE30")), "\xA0 & \xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-3979854402"
  }, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3979854402"
  }, ".loginForm.jsx-3979854402{width:350px;margin:0 auto;padding:50px 0 150px 0;}.textInputForm.jsx-3979854402{width:100%;}.inputForm.jsx-3979854402{margin:10px 0;}h1.jsx-3979854402{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:30px;font-weight:500;text-align:center;margin:20px 0;}.loginForm.jsx-3979854402 input.jsx-3979854402{padding:10px;}.loginForm.jsx-3979854402 input.jsx-3979854402{width:100%;height:50px;margin:5px 0px;border-radius:5px;border:1px solid #BDBDBD;}.login_etc.jsx-3979854402{margin-top:10px;font-size:12px;}.login_etc.jsx-3979854402 div.jsx-3979854402:first-child{float:left;}.login_etc.jsx-3979854402 div.jsx-3979854402:last-child{float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbG9naW5cXExvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySFMsQUFHd0IsQUFLRCxBQUdHLEFBR0ssQUFPTixBQUdGLEFBT0ssQUFJTCxBQUdDLFdBN0JiLEFBZ0JhLEFBV2IsQ0FoQ2dCLEFBbUNoQixDQWpCQSxDQVZBLEVBb0JnQixPQU5BLEdBckJRLEtBNEJ4QixPQU5vQixXQXJCcEIsT0F1QkQseUJBQUMsWUFkZ0IsZUFDQyxnQkFDRSxrQkFDSixjQUNmIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbG9naW5cXExvZ2luLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cclxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcbiAgU0VUX1VTRVJOQU1FLCBTRVRfUEFTU1dPUkQsXHJcbiAgRE9fTE9HSU4sIFNFU1NJT05fQ0hFQ0ssXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvc2FnYUxvZ2luUmVkdWNlcic7XHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSB3aXRoU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICAnJiBsYWJlbC5NdWktZm9jdXNlZCc6IHtcclxuICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG4gICAgICAnJiBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KShUZXh0RmllbGQpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIG1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IExvZ2luID0gbWVtbygocHJvcHMpID0+IHtcclxuICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUxvZ2luLCBbXSk7XHJcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGxvZ2luO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaWRJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHB3SW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChsb2dpbi5sb2dpblN0YXR1cyA9PT0gJ2xvZ2luX2ZhaWxlZCcpIHtcclxuICAgICAgICBpZElucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRhdGEoKTtcclxuICB9LCBbbG9naW5dKTtcclxuICBjb25zdCBsb2dpblN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBET19MT0dJTiwgcGF5bG9hZDogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TTlNPTCDroZzqt7jsnbg8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpblN1Ym1pdEZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0SW5wdXRGb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgPENzc1RleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXtpZElucHV0fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLslYTsnbTrlJTrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9VU0VSTkFNRSwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Rm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxDc3NUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53aWR0aH1cclxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXtwd0lucHV0fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VmOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9QQVNTV09SRCwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGJsb2NrIHR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIndhcm5pbmdcIiBibG9jayB0eXBlPVwiYnV0dG9uXCI+S2FLYW8g66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fZXRjXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPu2ajOybkOqwgOyehTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPuyVhOydtOuUlCDssL7quLA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICZcclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+67mE67CA67KI7Zi4IOywvuq4sDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubG9naW5Gb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6MzUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjUwcHggMCAxNTBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRleHRJbnB1dEZvcm17XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW5wdXRGb3Jte1xyXG4gICAgICAgICAgICBtYXJnaW46MTBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5Gb3JtIGlucHV0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5Gb3JtIGlucHV0e1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0JEQkRCRFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luX2V0YyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5fZXRjIGRpdjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbl9ldGMgZGl2Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\login\\\\Login.jsx */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/main/Card.jsx":
/*!**********************************!*\
  !*** ./components/main/Card.jsx ***!
  \**********************************/
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
/* harmony import */ var _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/reducers/cardReducer */ "./redux/reducers/cardReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable no-nested-ternary */

/* eslint-disable no-unused-expressions */




const Card = () => {
  const login = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.sagaLogin, []);
  const {
    fetchState,
    card
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.card, []);
  const {
    0: reply,
    1: setReply
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchData = () => {
      dispatch({
        type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_START"],
        payload: login.username
      });
    };

    fetchData();
  }, []); // console.log(card);

  const clickLike = v => {
    console.log('like', login.username, v.board_id);
    const payload = {
      username: login.username,
      board_id: v.board_id
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_CARD_REQUEST"],
      payload
    });
  };

  const clickUnLike = v => {
    console.log('unlike', login.username, v.board_id);
    const payload = {
      username: login.username,
      board_id: v.board_id
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_CARD_REQUEST"],
      payload
    });
  };

  const changeReply = e => {
    setReply({
      [e.target.name]: e.target.value
    });
    console.log(reply);
  };

  const inserInput = (v, i) => {
    console.log('reply', login.username, v.board_id, reply[i]);
    const payload = {
      username: login.username,
      board_id: v.board_id,
      desc: reply[i]
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_CARD_REPLY_REQUEST"],
      payload
    });
  };

  const delReply = (v, vi) => {
    console.log('reply', login.username, v.board_id, v.replies[vi].id);
    const payload = {
      reple_id: v.replies[vi].id,
      username: login.username,
      board_id: v.board_id
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["DEL_CARD_REPLY_REQUEST"],
      payload
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-543435545" + " " + "left_content"
  }, card.map((v, i) => __jsx("div", {
    key: i,
    className: "jsx-543435545" + " " + "card main_card"
  }, __jsx("div", {
    className: "jsx-543435545"
  }, __jsx("span", {
    className: "jsx-543435545"
  }, v.user_id)), __jsx("div", {
    className: "jsx-543435545"
  }, __jsx("span", {
    className: "jsx-543435545"
  }, v.title)), __jsx("div", {
    className: "jsx-543435545"
  }, v.desc), __jsx("div", {
    className: "jsx-543435545" + " " + "like"
  }, (username => {
    const filter = v.likes.findIndex(e => e.user_id === username);

    if (filter === -1) {
      return __jsx("i", {
        "aria-hidden": "true",
        onClick: () => clickLike(v),
        className: "jsx-543435545" + " " + "fa fa-heart-o"
      });
    }

    return __jsx("i", {
      "aria-hidden": "true",
      onClick: () => clickUnLike(v),
      className: "jsx-543435545" + " " + "fa fa-heart"
    });
  })(login.username), ' ', __jsx("span", {
    className: "jsx-543435545"
  }, v.likes.length === 0 ? 0 : v.likes.length === 1 ? `${v.likes[0].user_id}님이 좋아합니다.` : `${v.likes[0].user_id}님 외 ${v.likes.length - 1}명이 좋아합니다.`)), __jsx("div", {
    className: "jsx-543435545"
  }, __jsx("input", {
    type: "text",
    value: reply.i,
    name: i,
    placeholder: "\uB313\uAE00",
    onChange: changeReply,
    className: "jsx-543435545" + " " + "reply_input"
  }), __jsx("input", {
    type: "button",
    value: "\uC785\uB825",
    onClick: () => inserInput(v, i),
    className: "jsx-543435545" + " " + "reply_btn"
  })), __jsx("div", {
    className: "jsx-543435545"
  }, v.replies.map((e, vi) => __jsx("div", {
    key: vi,
    className: "jsx-543435545" + " " + "reply_indi"
  }, __jsx("span", {
    className: "jsx-543435545" + " " + "reply_desc"
  }, `${v.replies[vi].user_id} : ${v.replies[vi].desc}`), __jsx("span", {
    className: "jsx-543435545" + " " + "reply_del"
  }, __jsx("button", {
    type: "button",
    onClick: () => delReply(v, vi),
    className: "jsx-543435545"
  }, "X")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "543435545"
  }, ".left_content.jsx-543435545{float:left;width:69%;margin-right:1%;}.main_card.jsx-543435545{margin-bottom:10px;padding:10px;}.reply_input.jsx-543435545{border:1px solid rgba(0,0,0,.125);width:90%;border-radius:5px;padding-left:10px;height:30px;}.reply_btn.jsx-543435545{border:1px solid rgba(0,0,0,.125);width:10%;height:30px;border-radius:5px;}.like.jsx-543435545{margin:5px 0;}.like.jsx-543435545 i.jsx-543435545{color:red;font-weight:700;font-size:13px;cursor:pointer;}.like.jsx-543435545 span.jsx-543435545{font-size:12px;}.reply_indi.jsx-543435545{margin:5px 0 0 0;padding-left:7px;overflow:hidden;}.reply_desc.jsx-543435545{display:block;float:left;}.reply_del.jsx-543435545{float:right;}.reply_del.jsx-543435545 button.jsx-543435545{padding:0px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUhTLEFBR3VCLEFBS1EsQUFJZSxBQU9BLEFBTXJCLEFBR0gsQUFNSyxBQUdFLEFBS0gsQUFJRixBQUdJLFVBcEJBLENBekJOLENBMkNYLENBckJBLENBaUJZLENBUlosQ0FlQSxDQVptQixFQTdCTCxFQUpJLElBdUNsQixDQWRnQixNQXBCaEIsRUFHVyxBQU9BLEFBbUJNLEdBakNqQixJQXlCZ0IsR0FqQkcsQUFPTixNQW1CYixNQWxCbUIsQUFVbkIsTUFqQm1CLFlBUW5CLE1BUGEsWUFDYiIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXG1haW5cXENhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXHJcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIEZFVENIX0NBUkRTX1NUQVJULCBMSUtFX0NBUkRfUkVRVUVTVCxcclxuICBVTkxJS0VfQ0FSRF9SRVFVRVNULCBBRERfQ0FSRF9SRVBMWV9SRVFVRVNULCBERUxfQ0FSRF9SRVBMWV9SRVFVRVNULFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2NhcmRSZWR1Y2VyJztcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhZ2FMb2dpbiwgW10pO1xyXG4gIGNvbnN0IHsgZmV0Y2hTdGF0ZSwgY2FyZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJkLCBbXSk7XHJcbiAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FSRFNfU1RBUlQsIHBheWxvYWQ6IGxvZ2luLnVzZXJuYW1lIH0pO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICAvLyBjb25zb2xlLmxvZyhjYXJkKTtcclxuICBjb25zdCBjbGlja0xpa2UgPSAodikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2xpa2UnLCBsb2dpbi51c2VybmFtZSwgdi5ib2FyZF9pZCk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICB1c2VybmFtZTogbG9naW4udXNlcm5hbWUsXHJcbiAgICAgIGJvYXJkX2lkOiB2LmJvYXJkX2lkLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogTElLRV9DQVJEX1JFUVVFU1QsIHBheWxvYWQgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjbGlja1VuTGlrZSA9ICh2KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndW5saWtlJywgbG9naW4udXNlcm5hbWUsIHYuYm9hcmRfaWQpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luLnVzZXJuYW1lLFxyXG4gICAgICBib2FyZF9pZDogdi5ib2FyZF9pZCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFVOTElLRV9DQVJEX1JFUVVFU1QsIHBheWxvYWQgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VSZXBseSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZXBseSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcGx5KTtcclxuICB9O1xyXG4gIGNvbnN0IGluc2VySW5wdXQgPSAodiwgaSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3JlcGx5JywgbG9naW4udXNlcm5hbWUsIHYuYm9hcmRfaWQsIHJlcGx5W2ldKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBsb2dpbi51c2VybmFtZSxcclxuICAgICAgYm9hcmRfaWQ6IHYuYm9hcmRfaWQsXHJcbiAgICAgIGRlc2M6IHJlcGx5W2ldLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX0NBUkRfUkVQTFlfUkVRVUVTVCwgcGF5bG9hZCB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGRlbFJlcGx5ID0gKHYsIHZpKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVwbHknLCBsb2dpbi51c2VybmFtZSwgdi5ib2FyZF9pZCwgdi5yZXBsaWVzW3ZpXS5pZCk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICByZXBsZV9pZDogdi5yZXBsaWVzW3ZpXS5pZCxcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luLnVzZXJuYW1lLFxyXG4gICAgICBib2FyZF9pZDogdi5ib2FyZF9pZCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTF9DQVJEX1JFUExZX1JFUVVFU1QsIHBheWxvYWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2NvbnRlbnRcIj5cclxuICAgICAgICB7Y2FyZC5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYWluX2NhcmRcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2LnVzZXJfaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj57di50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt2LmRlc2N9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHYubGlrZXMuZmluZEluZGV4KChlKSA9PiBlLnVzZXJfaWQgPT09IHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IGNsaWNrTGlrZSh2KX0gLz47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gY2xpY2tVbkxpa2Uodil9IC8+O1xyXG4gICAgICAgICAgICAgICAgfSkobG9naW4udXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHYubGlrZXMubGVuZ3RoID09PSAwID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogdi5saWtlcy5sZW5ndGggPT09IDEgPyBgJHt2Lmxpa2VzWzBdLnVzZXJfaWR964uY7J20IOyii+yVhO2VqeuLiOuLpC5gXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGAke3YubGlrZXNbMF0udXNlcl9pZH3ri5gg7Jm4ICR7di5saWtlcy5sZW5ndGggLSAxfeuqheydtCDsoovslYTtlanri4jri6QuYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicmVwbHlfaW5wdXRcIiB2YWx1ZT17cmVwbHkuaX0gbmFtZT17aX0gcGxhY2Vob2xkZXI9XCLrjJPquIBcIiBvbkNoYW5nZT17Y2hhbmdlUmVwbHl9IC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJyZXBseV9idG5cIiB2YWx1ZT1cIuyeheugpVwiIG9uQ2xpY2s9eygpID0+IGluc2VySW5wdXQodiwgaSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYucmVwbGllcy5tYXAoKGUsIHZpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHlfaW5kaVwiIGtleT17dml9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcGx5X2Rlc2NcIj57YCR7di5yZXBsaWVzW3ZpXS51c2VyX2lkfSA6ICR7di5yZXBsaWVzW3ZpXS5kZXNjfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcGx5X2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGVsUmVwbHkodiwgdmkpfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxlZnRfY29udGVudHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NjklO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW5fY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2J0bntcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgICAgICAgICB3aWR0aDoxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtle1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSBpe1xyXG4gICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpa2Ugc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5kaXtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwIDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBseV9kZXNje1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2RlbHtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfZGVsIGJ1dHRvbntcclxuICAgICAgICAgICAgcGFkZGluZzowcHggNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/main/Main.jsx":
/*!**********************************!*\
  !*** ./components/main/Main.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/Profile */ "./components/profile/Profile.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/main/Card.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Main = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
  id: "content",
  className: "jsx-3436404709"
}, __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_profile_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3436404709"
}, "#content.jsx-3436404709{padding:10px 0;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcTWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY08sQUFHMEIsZUFDQSxnQkFDakIiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHNuc29sX3Byb2plY3RcXGZyb250ZW5kXFxjb21wb25lbnRzXFxtYWluXFxNYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LFxyXG4gIG1lbW8sXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9wcm9maWxlL1Byb2ZpbGUnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5cclxuY29uc3QgTWFpbiA9IG1lbW8oKHByb3BzKSA9PiAoXHJcbiAgPEZyYWdtZW50PlxyXG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgPENhcmQgLz5cclxuICAgICAgPFByb2ZpbGUgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAjY29udGVudHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvRnJhZ21lbnQ+XHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Main.jsx */")));
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/profile/Profile.jsx":
/*!****************************************!*\
  !*** ./components/profile/Profile.jsx ***!
  \****************************************/
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
/* harmony import */ var _redux_reducers_followReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/reducers/followReducer */ "./redux/reducers/followReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Profile = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(() => {
  const login = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.sagaLogin, []);
  const {
    following,
    follower
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.follow, []);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // console.log(follow)
    const fetchData = async () => {
      dispatch({
        type: _redux_reducers_followReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_FOLLOW_COUNT_VALUE"],
        payload: login.username
      });
    };

    fetchData();
  }, [following, follower]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-3215524810" + " " + "right_content"
  }, __jsx("div", {
    className: "jsx-3215524810" + " " + "p_top"
  }, __jsx("p", {
    className: "jsx-3215524810" + " " + "p_name"
  }, `${login.name} (${login.username})`), __jsx("button", {
    type: "button",
    className: "jsx-3215524810"
  }, "LogOut")), __jsx("div", {
    className: "jsx-3215524810" + " " + "card"
  }, __jsx("table", {
    className: "jsx-3215524810"
  }, __jsx("thead", {
    className: "jsx-3215524810"
  }, __jsx("tr", {
    className: "jsx-3215524810"
  }, __jsx("th", {
    className: "jsx-3215524810"
  }, "Follower"), __jsx("th", {
    className: "jsx-3215524810"
  }, "Following"))), __jsx("tbody", {
    className: "jsx-3215524810"
  }, __jsx("tr", {
    className: "jsx-3215524810"
  }, __jsx("td", {
    className: "jsx-3215524810"
  }, follower), __jsx("td", {
    className: "jsx-3215524810"
  }, following)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3215524810"
  }, ".right_content.jsx-3215524810{float:left;width:30%;}.p_top.jsx-3215524810{overflow:hidden;padding:0 0 10px 0;height:50px;}.p_top.jsx-3215524810 p.jsx-3215524810{float:left;line-height:50px;}.p_top.jsx-3215524810 button.jsx-3215524810{float:right;width:30%;height:30px;margin-top:10px;}.p_name.jsx-3215524810{font-size:15px;}table.jsx-3215524810{text-align:center;margin:10px 0;}table.jsx-3215524810 th.jsx-3215524810,table.jsx-3215524810 td.jsx-3215524810{height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xccHJvZmlsZVxcUHJvZmlsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNTLEFBR3VCLEFBSUssQUFLTCxBQUlDLEFBTUcsQUFHRyxBQUlOLFdBekJGLEFBU08sQ0FJUCxBQWFYLEdBUEEsQ0Fmb0IsRUFrQkwsR0FyQmYsQ0FhYSxNQUpiLElBYUEsRUFSaUIsQ0FWSixZQUNiLEdBVUEiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHNuc29sX3Byb2plY3RcXGZyb250ZW5kXFxjb21wb25lbnRzXFxwcm9maWxlXFxQcm9maWxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBtZW1vLFxyXG59IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGRVRDSF9GT0xMT1dfQ09VTlRfVkFMVUUgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9mb2xsb3dSZWR1Y2VyJztcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUxvZ2luLCBbXSk7XHJcbiAgY29uc3QgeyBmb2xsb3dpbmcsIGZvbGxvd2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvbGxvdywgW10pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZm9sbG93KVxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0ZPTExPV19DT1VOVF9WQUxVRSwgcGF5bG9hZDogbG9naW4udXNlcm5hbWUgfSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2ZvbGxvd2luZywgZm9sbG93ZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwX3RvcFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicF9uYW1lXCI+XHJcbiAgICAgICAgICAgIHtgJHtsb2dpbi5uYW1lfSAoJHtsb2dpbi51c2VybmFtZX0pYH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkxvZ091dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkZvbGxvd2VyPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Gb2xsb3dpbmc8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2ZvbGxvd2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2ZvbGxvd2luZ308L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJpZ2h0X2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wX3RvcHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAgMCAxMHB4IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBfdG9wIHB7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucF90b3AgYnV0dG9ue1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBfbmFtZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZSB0aCwgdGFibGUgdGR7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\profile\\\\Profile.jsx */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_login_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/Login */ "./components/login/Login.jsx");
/* harmony import */ var _components_main_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/Main */ "./components/main/Main.jsx");
/* harmony import */ var _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable no-nested-ternary */







const Index = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(props => {
  const login = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.sagaLogin, []);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    loginStatus
  } = login;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = () => {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_6__["SESSION_CHECK"]
      });
    };

    fetchData();
  }, [loginStatus]);

  const Render = () => {
    if (loginStatus === 'failed' || loginStatus === 'ongoing' || loginStatus === 'login_failed') {
      return __jsx(_components_login_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }

    if (loginStatus === 'success') {
      return __jsx(_components_main_Main__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }

    return __jsx("img", {
      src: "../static/img/page_loading.png",
      width: "1100px",
      alt: ""
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Render());
});

Index.getInitialProps = () => {};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./redux/reducers/cardReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cardReducer.js ***!
  \***************************************/
/*! exports provided: FETCH_CARDS_START_STARTED, FETCH_CARDS_SUCCESS_STARTED, FETCH_CARDS_FAIL_STARTED, LIKE_CARD_SUCCESS, LIKE_CARDS_FAIL, UNLIKE_CARD_SUCCESS, UNLIKE_CARDS_FAIL, ADD_CARD_REPLY_SUCCESS, ADD_CARD_REPLY_FAIL, DEL_CARD_REPLY_SUCCESS, DEL_CARD_REPLY_FAIL, FETCH_CARDS_START, LIKE_CARD_REQUEST, UNLIKE_CARD_REQUEST, ADD_CARD_REPLY_REQUEST, DEL_CARD_REPLY_REQUEST, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_START_STARTED", function() { return FETCH_CARDS_START_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_SUCCESS_STARTED", function() { return FETCH_CARDS_SUCCESS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_FAIL_STARTED", function() { return FETCH_CARDS_FAIL_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CARD_SUCCESS", function() { return LIKE_CARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CARDS_FAIL", function() { return LIKE_CARDS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_CARD_SUCCESS", function() { return UNLIKE_CARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_CARDS_FAIL", function() { return UNLIKE_CARDS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD_REPLY_SUCCESS", function() { return ADD_CARD_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD_REPLY_FAIL", function() { return ADD_CARD_REPLY_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_CARD_REPLY_SUCCESS", function() { return DEL_CARD_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_CARD_REPLY_FAIL", function() { return DEL_CARD_REPLY_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_START", function() { return FETCH_CARDS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CARD_REQUEST", function() { return LIKE_CARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_CARD_REQUEST", function() { return UNLIKE_CARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD_REPLY_REQUEST", function() { return ADD_CARD_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_CARD_REPLY_REQUEST", function() { return DEL_CARD_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable max-len */

/* eslint-disable camelcase */
const FETCH_CARDS_START_STARTED = 'FETCH_CARDS_START_STARTED';
const FETCH_CARDS_SUCCESS_STARTED = 'FETCH_CARDS_SUCCESS_STARTED';
const FETCH_CARDS_FAIL_STARTED = 'FETCH_CARDS_FAIL_STARTED';
const LIKE_CARD_SUCCESS = 'LIKE_CARD_SUCCESS';
const LIKE_CARDS_FAIL = 'LIKE_CARDS_FAIL';
const UNLIKE_CARD_SUCCESS = 'UNLIKE_CARD_SUCCESS';
const UNLIKE_CARDS_FAIL = 'UNLIKE_CARDS_FAIL';
const ADD_CARD_REPLY_SUCCESS = 'ADD_CARD_REPLY_SUCCESS';
const ADD_CARD_REPLY_FAIL = 'ADD_CARD_REPLY_FAIL';
const DEL_CARD_REPLY_SUCCESS = 'DEL_CARD_REPLY_SUCCESS';
const DEL_CARD_REPLY_FAIL = 'DEL_CARD_REPLY_FAIL'; // 사가에서 가로챌 액션 값

const FETCH_CARDS_START = 'FETCH_CARDS_START';
const LIKE_CARD_REQUEST = 'LIKE_CARD_REQUEST';
const UNLIKE_CARD_REQUEST = 'UNLIKE_CARD_REQUEST';
const ADD_CARD_REPLY_REQUEST = 'ADD_CARD_REPLY_REQUEST';
const DEL_CARD_REPLY_REQUEST = 'DEL_CARD_REPLY_REQUEST';
const initialState = {
  fetchState: '',
  card: []
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_START_STARTED:
      {
        return _objectSpread({}, state, {
          fetchState: 'card_fetching'
        });
      }

    case FETCH_CARDS_SUCCESS_STARTED:
      {
        // console.log(action.payload);
        return _objectSpread({}, state, {
          card: action.payload,
          fetchState: 'card_fetching_success'
        });
      }

    case FETCH_CARDS_FAIL_STARTED:
      {
        return _objectSpread({}, state, {
          fetchState: 'card_fetching_fail'
        });
      }

    case LIKE_CARD_SUCCESS:
      {
        const card = [...state.card];
        const cardIndex = card.findIndex(v => v.board_id === action.payload.board_id);
        card[cardIndex].likes = card[cardIndex].likes.concat(action.payload);
        return _objectSpread({}, state, {
          card
        });
      }

    case UNLIKE_CARD_SUCCESS:
      {
        const card = [...state.card];
        const cardIndex = card.findIndex(v => v.board_id === action.payload.boardId);
        const likeIndex = card[cardIndex].likes.findIndex(v => v.user_id === action.payload.userId);
        card[cardIndex].likes.splice(likeIndex, 1);
        return _objectSpread({}, state, {
          card
        });
      }

    case ADD_CARD_REPLY_SUCCESS:
      {
        const card = [...state.card];
        console.log(action.payload);
        const cardIndex = card.findIndex(v => v.board_id === action.payload.board_id);
        card[cardIndex].replies = card[cardIndex].replies.concat(action.payload); // console.log(card[cardIndex].replies);

        return _objectSpread({}, state, {
          card
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cardReducer);

/***/ }),

/***/ "./redux/reducers/followReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/followReducer.js ***!
  \*****************************************/
/*! exports provided: FETCH_FOLLOW_COUNT_VALUE_STATED, FETCH_FOLLOW_COUNT_VALUE, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FOLLOW_COUNT_VALUE_STATED", function() { return FETCH_FOLLOW_COUNT_VALUE_STATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FOLLOW_COUNT_VALUE", function() { return FETCH_FOLLOW_COUNT_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 액션 선언
const FETCH_FOLLOW_COUNT_VALUE_STATED = 'FETCH_FOLLOW_COUNT_VALUE_STATED'; // export const FETCH_FOLLOW_COUNT_VALUE_SUCCESS = 'FETCH_FOLLOW_COUNT_VALUE_STATED';
// export const FETCH_FOLLOW_COUNT_VALUE_FAIL = 'FETCH_FOLLOW_COUNT_VALUE_STATED';
// 사가 액션 선언

const FETCH_FOLLOW_COUNT_VALUE = 'FETCH_FOLLOW_COUNT_VALUE'; // 초기 값

const initialState = {
  following: 0,
  follower: 0,
  followingList: [],
  followerList: []
}; // 액션

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOW_COUNT_VALUE_STATED:
      {
        const {
          following,
          follower
        } = action.payload;
        return _objectSpread({}, state, {
          following,
          follower
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (followReducer);

/***/ }),

/***/ "./redux/reducers/sagaLoginReducer.js":
/*!********************************************!*\
  !*** ./redux/reducers/sagaLoginReducer.js ***!
  \********************************************/
/*! exports provided: SET_USERNAME_STARTED, SET_PASSWORD_STARTED, DO_LOGIN_STARTED, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL, SESSION_CHECK_STARTED, SESSION_CHECK_HAVE, SESSION_CHECK_NONE, SET_USERNAME, SET_PASSWORD, DO_LOGIN, SESSION_CHECK, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME_STARTED", function() { return SET_USERNAME_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_STARTED", function() { return SET_PASSWORD_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN_STARTED", function() { return DO_LOGIN_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN_SUCCESS", function() { return DO_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN_FAIL", function() { return DO_LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK_STARTED", function() { return SESSION_CHECK_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK_HAVE", function() { return SESSION_CHECK_HAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK_NONE", function() { return SESSION_CHECK_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME", function() { return SET_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD", function() { return SET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN", function() { return DO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK", function() { return SESSION_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable camelcase */
const SET_USERNAME_STARTED = 'SET_USERNAME_STARTED';
const SET_PASSWORD_STARTED = 'SET_PASSWORD_STARTED';
const DO_LOGIN_STARTED = 'DO_LOGIN_STARTED';
const DO_LOGIN_SUCCESS = 'DO_LOGIN_SUCCESS';
const DO_LOGIN_FAIL = 'DO_LOGIN_FAIL';
const SESSION_CHECK_STARTED = 'SESSION_CHECK_STARTED';
const SESSION_CHECK_HAVE = 'SESSION_CHECK_HAVE';
const SESSION_CHECK_NONE = 'SESSION_CHECK_NONE'; // SAGA Action

const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const DO_LOGIN = 'DO_LOGIN';
const SESSION_CHECK = 'SESSION_CHECK';
const initialState = {
  username: '',
  password: '',
  name: '',
  loginStatus: undefined,
  loginErrorMsg: ''
};

const sagaLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME_STARTED:
      {
        return _objectSpread({}, state, {
          username: action.payload
        });
      }

    case SET_PASSWORD_STARTED:
      {
        return _objectSpread({}, state, {
          password: action.payload
        });
      }

    case DO_LOGIN_STARTED:
      {
        return _objectSpread({}, state, {
          loginStatus: 'ongoing'
        });
      }

    case DO_LOGIN_SUCCESS:
      {
        return _objectSpread({}, state, {
          loginStatus: 'success'
        });
      }

    case DO_LOGIN_FAIL:
      {
        return _objectSpread({}, state, {
          username: '',
          password: '',
          loginStatus: 'login_failed'
        });
      }

    case SESSION_CHECK_STARTED:
      {
        return _objectSpread({}, state);
      }

    case SESSION_CHECK_HAVE:
      {
        const {
          user_id,
          name
        } = action.payload.session_data.user;
        const username = user_id;
        return _objectSpread({}, state, {
          username,
          name,
          loginStatus: 'success'
        });
      }

    case SESSION_CHECK_NONE:
      {
        return _objectSpread({}, state, {
          loginStatus: 'failed'
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sagaLoginReducer);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desktop\snsol_project\frontend\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map