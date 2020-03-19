webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/profile/Profile.jsx":
/*!****************************************!*\
  !*** ./components/profile/Profile.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Profile = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function () {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      followingId = _useState2[0],
      setFollowingId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      followerId = _useState3[0],
      setFollowerId = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var consoleData = function consoleData() {
      console.log(login);
    };

    consoleData();
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-1621503760" + " " + "right_content card"
  }, __jsx("p", {
    className: "jsx-1621503760"
  }, "\uD314\uB85C\uC6B0"), __jsx("p", {
    className: "jsx-1621503760"
  }, "\uD314\uB85C\uC789")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1621503760"
  }, ".right_content.jsx-1621503760{float:left;width:30%;height:500px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xccHJvZmlsZVxcUHJvZmlsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJTLEFBR3VCLFdBQ0QsVUFDRyxhQUNVLHVCQUN4QiIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXHByb2ZpbGVcXFByb2ZpbGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBQcm9maWxlID0gbWVtbygoKSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhZ2FMb2dpbiwgW10pO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZm9sbG93aW5nSWQsIHNldEZvbGxvd2luZ0lkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmb2xsb3dlcklkLCBzZXRGb2xsb3dlcklkXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjb25zb2xlRGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cobG9naW4pO1xyXG4gICAgfTtcclxuICAgIGNvbnNvbGVEYXRhKCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9jb250ZW50IGNhcmRcIj5cclxuICAgICAgICA8cD7tjJTroZzsmrA8L3A+XHJcbiAgICAgICAgPHA+7YyU66Gc7J6JPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJpZ2h0X2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\profile\\\\Profile.jsx */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.4b58ccda6d77b5beca12.hot-update.js.map