webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Login = function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var loginSubmitForm = function loginSubmitForm(e) {
    e.preventDefault();
    console.log(id);
    console.log(password);
  };

  return __jsx("div", {
    className: "jsx-276210611" + " " + "loginForm"
  }, __jsx("h1", {
    className: "jsx-276210611"
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm,
    className: "jsx-276210611"
  }, __jsx("div", {
    className: "jsx-276210611"
  }, __jsx("input", {
    type: "text",
    value: id,
    onChange: function onChange(e) {
      return setId(e.target.value);
    },
    id: "uid",
    className: "jsx-276210611"
  })), __jsx("div", {
    className: "jsx-276210611"
  }, __jsx("input", {
    type: "password",
    autoComplete: "on",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "jsx-276210611"
  })), __jsx("button", {
    type: "submit",
    className: "jsx-276210611"
  }, "\uC804\uC1A1")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "276210611"
  }, ".loginForm.jsx-276210611{width:350px;margin:0 auto;padding:30px 0;}.loginForm.jsx-276210611 input.jsx-276210611,.loginForm.jsx-276210611 button.jsx-276210611{width:100%;height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlMsQUFHd0IsQUFLRCxXQUNDLENBTEcsV0FNaEIsR0FMZ0IsZUFDaEIiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHNuc29sX3Byb2plY3RcXGZyb250ZW5kXFxwYWdlc1xcbG9naW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGxvZ2luU3VibWl0Rm9ybSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXNzd29yZCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkZvcm1cIj5cclxuICAgICAgPGgxPuuhnOq3uOyduDwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpblN1Ym1pdEZvcm19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpfSBpZD1cInVpZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBhdXRvQ29tcGxldGU9XCJvblwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7KCE7IahPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxvZ2luRm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOjM1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzozMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5Gb3JtIGlucHV0LCAubG9naW5Gb3JtIGJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\login.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.1f75619b5302f79f9f38.hot-update.js.map