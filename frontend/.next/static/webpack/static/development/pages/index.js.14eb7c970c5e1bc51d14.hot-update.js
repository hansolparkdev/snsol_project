webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/profile/Profile.jsx":
/*!****************************************!*\
  !*** ./components/profile/Profile.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_followReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/followReducer */ "./redux/reducers/followReducer.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Profile = Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(function () {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.follow;
  }, []),
      following = _useSelector.following,
      follower = _useSelector.follower;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // console.log(follow)
    var fetchData = function fetchData() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _redux_reducers_followReducer__WEBPACK_IMPORTED_MODULE_5__["FETCH_FOLLOW_COUNT_VALUE"],
                payload: login.username
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
    };

    console.log(following);
    console.log(follower);
    fetchData();
  }, [following, follower]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, __jsx("div", {
    className: "jsx-1621503760" + " " + "right_content card"
  }, __jsx("p", {
    className: "jsx-1621503760"
  }, "\uD314\uB85C\uC6B0"), __jsx("p", {
    className: "jsx-1621503760"
  }, following), __jsx("p", {
    className: "jsx-1621503760"
  }, "\uD314\uB85C\uC789")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1621503760"
  }, ".right_content.jsx-1621503760{float:left;width:30%;height:500px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xccHJvZmlsZVxcUHJvZmlsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJTLEFBR3VCLFdBQ0QsVUFDRyxhQUNVLHVCQUN4QiIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXHByb2ZpbGVcXFByb2ZpbGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIG1lbW8sXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZFVENIX0ZPTExPV19DT1VOVF9WQUxVRSB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2ZvbGxvd1JlZHVjZXInO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ2luID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zYWdhTG9naW4sIFtdKTtcclxuICBjb25zdCB7IGZvbGxvd2luZywgZm9sbG93ZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9sbG93LCBbXSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb2xsb3cpXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfRk9MTE9XX0NPVU5UX1ZBTFVFLCBwYXlsb2FkOiBsb2dpbi51c2VybmFtZSB9KTtcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhmb2xsb3dpbmcpO1xyXG4gICAgY29uc29sZS5sb2coZm9sbG93ZXIpO1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2ZvbGxvd2luZywgZm9sbG93ZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9jb250ZW50IGNhcmRcIj5cclxuICAgICAgICA8cD7tjJTroZzsmrA8L3A+XHJcbiAgICAgICAgPHA+e2ZvbGxvd2luZ308L3A+XHJcbiAgICAgICAgPHA+7YyU66Gc7J6JPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJpZ2h0X2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\profile\\\\Profile.jsx */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.14eb7c970c5e1bc51d14.hot-update.js.map