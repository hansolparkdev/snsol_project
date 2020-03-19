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
/* harmony import */ var _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Profile = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function () {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      followingId = _useState2[0],
      setFollowingId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      followerId = _useState3[0],
      setFollowerId = _useState3[1];

  console.log(login);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SESSION_CHECK"]
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-1621503760" + " " + "right_content card"
  }, __jsx("p", {
    className: "jsx-1621503760"
  }, "\uD314\uB85C\uC6B0"), __jsx("p", {
    className: "jsx-1621503760"
  }, "\uD314\uB85C\uC789")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1621503760"
  }, ".right_content.jsx-1621503760{float:left;width:30%;height:500px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xccHJvZmlsZVxcUHJvZmlsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JTLEFBR3VCLFdBQ0QsVUFDRyxhQUNVLHVCQUN4QiIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXHByb2ZpbGVcXFByb2ZpbGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIG1lbW8sXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNFU1NJT05fQ0hFQ0sgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9zYWdhTG9naW5SZWR1Y2VyJztcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUxvZ2luLCBbXSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZvbGxvd2luZ0lkLCBzZXRGb2xsb3dpbmdJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZm9sbG93ZXJJZCwgc2V0Rm9sbG93ZXJJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zb2xlLmxvZyhsb2dpbik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogU0VTU0lPTl9DSEVDSyB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9jb250ZW50IGNhcmRcIj5cclxuICAgICAgICA8cD7tjJTroZzsmrA8L3A+XHJcbiAgICAgICAgPHA+7YyU66Gc7J6JPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJpZ2h0X2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\profile\\\\Profile.jsx */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.f6b6957016f8a1b4073d.hot-update.js.map