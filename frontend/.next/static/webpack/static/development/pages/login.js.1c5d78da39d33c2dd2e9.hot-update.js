webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Login = function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('dd'),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      password = _useState2[0],
      setPassword = _useState2[1];

  var loginSubmitForm = function loginSubmitForm(e) {
    e.preventDefault();
    console.log(id);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h1", null, "\uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm
  }, __jsx("input", {
    type: "text",
    value: id,
    onChange: function onChange(e) {
      return setId(e.target.value);
    }
  }), __jsx("input", {
    type: "text",
    value: password,
    onChange: function onChange(e) {
      return setLoginId(e.target.value);
    }
  }), __jsx("button", {
    type: "submit"
  }, "\uC804\uC1A1")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.1c5d78da39d33c2dd2e9.hot-update.js.map