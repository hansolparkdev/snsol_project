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
      loginId = _useState[0],
      setLoginId = _useState[1];

  var loginSubmitForm = function loginSubmitForm() {
    console.log(loginId);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h1", null, "\uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm
  }, __jsx("input", {
    type: "text",
    value: loginId,
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
//# sourceMappingURL=login.js.54cc86f79f27dc72d282.hot-update.js.map