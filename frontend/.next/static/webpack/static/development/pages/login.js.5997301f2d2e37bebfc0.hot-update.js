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
    className: "jsx-3010511021" + " " + "loginForm"
  }, __jsx("h1", {
    className: "jsx-3010511021"
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm,
    className: "jsx-3010511021"
  }, __jsx("div", {
    className: "jsx-3010511021"
  }, __jsx("input", {
    type: "text",
    value: id,
    onChange: function onChange(e) {
      return setId(e.target.value);
    },
    id: "uid",
    className: "jsx-3010511021"
  })), __jsx("div", {
    className: "jsx-3010511021"
  }, __jsx("input", {
    type: "password",
    autoComplete: "on",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "jsx-3010511021"
  })), __jsx("button", {
    type: "submit",
    className: "jsx-3010511021"
  }, "\uC804\uC1A1")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3010511021"
  }, ".loginForm.jsx-3010511021{width:350px;margin:0 auto;padding:30px 0;}h1.jsx-3010511021{font-size:30px;text-align:center;margin:10px 0;}.loginForm.jsx-3010511021 input.jsx-3010511021{border-bottom:0;}.loginForm.jsx-3010511021 input.jsx-3010511021,.loginForm.jsx-3010511021 button.jsx-3010511021{width:100%;height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlMsQUFHd0IsQUFLRyxBQUtDLEFBR0wsV0FDQyxDQWJHLEdBS0csQ0FLbkIsT0FJQSxHQWJnQixPQUtELFFBSmYsTUFLQSIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXHBhZ2VzXFxsb2dpbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgbG9naW5TdWJtaXRGb3JtID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiPlxyXG4gICAgICA8aDE+66Gc6re47J24PC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2luU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJZChlLnRhcmdldC52YWx1ZSl9IGlkPVwidWlkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGF1dG9Db21wbGV0ZT1cIm9uXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7soITshqE8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubG9naW5Gb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6MzUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjMwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5Gb3JtIGlucHV0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5Gb3JtIGlucHV0LCAubG9naW5Gb3JtIGJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\login.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.5997301f2d2e37bebfc0.hot-update.js.map