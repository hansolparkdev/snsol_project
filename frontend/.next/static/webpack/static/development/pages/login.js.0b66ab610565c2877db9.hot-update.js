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
    className: "jsx-3496666565" + " " + "loginForm"
  }, __jsx("h1", {
    className: "jsx-3496666565"
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm,
    className: "jsx-3496666565"
  }, __jsx("div", {
    className: "jsx-3496666565"
  }, __jsx("input", {
    type: "text",
    value: id,
    onChange: function onChange(e) {
      return setId(e.target.value);
    },
    id: "uid",
    className: "jsx-3496666565"
  })), __jsx("div", {
    className: "jsx-3496666565"
  }, __jsx("input", {
    type: "password",
    autoComplete: "on",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "jsx-3496666565"
  })), __jsx("button", {
    type: "submit",
    className: "jsx-3496666565"
  }, "\uC804\uC1A1")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3496666565"
  }, ".loginForm.jsx-3496666565{width:350px;margin:0 auto;padding:30px 0;}h1.jsx-3496666565{font-size:30px;text-align:center;margin:10px 0;}.loginForm.jsx-3496666565 input.jsx-3496666565{border-top:1px solid #BDBDBD;border-left:1px solid #BDBDBD;border-right:1px solid #BDBDBD;border-bottom:0;}.loginForm.jsx-3496666565 input.jsx-3496666565,.loginForm.jsx-3496666565 button.jsx-3496666565{width:100%;height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlMsQUFHd0IsQUFLRyxBQUtjLEFBTWxCLFdBQ0MsQ0FoQkcsR0FLRyxRQVluQixHQWhCZ0IsR0FTZSxJQUpoQixRQUpmLE1BS0EsWUFJZ0MsK0JBQ2YsZ0JBQ2pCIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBsb2dpblN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgY29uc29sZS5sb2cocGFzc3dvcmQpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Gb3JtXCI+XHJcbiAgICAgIDxoMT7roZzqt7jsnbg8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW5TdWJtaXRGb3JtfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17KGUpID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX0gaWQ9XCJ1aWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwib25cIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyghOyGoTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5sb2dpbkZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDozNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MzBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOjEwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbkZvcm0gaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNCREJEQkQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjQkRCREJEO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNCREJEQkQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbkZvcm0gaW5wdXQsIC5sb2dpbkZvcm0gYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\login.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.0b66ab610565c2877db9.hot-update.js.map