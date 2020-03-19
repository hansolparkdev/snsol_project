webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_profile_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/profile/Profile */ "./components/profile/Profile.jsx");
/* harmony import */ var _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Index = function Index(props) {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var loginStatus = login.loginStatus;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_6__["SESSION_CHECK"]
      });
    };

    fetchData();
  }, [loginStatus]);

  var foo = function foo() {
    console.log('aaa');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, loginStatus !== 'failed' && __jsx("div", {
    id: "content",
    className: "jsx-3262729362"
  }, __jsx("div", {
    className: "jsx-3262729362" + " " + "left_content"
  }, __jsx("div", {
    className: "jsx-3262729362" + " " + "card"
  }, __jsx("div", {
    className: "jsx-3262729362"
  }, __jsx("span", {
    className: "jsx-3262729362"
  }, "\uD504\uB85C\uD544\uC0AC\uC9C4"), __jsx("span", {
    className: "jsx-3262729362"
  }, "\uC774\uB984")), __jsx("div", {
    className: "jsx-3262729362"
  }, "\uC774\uBBF8\uC9C0\uC2AC\uB77C\uC774\uB4DC"), __jsx("div", {
    className: "jsx-3262729362"
  }, __jsx("button", {
    onClick: foo,
    onKeyDown: foo,
    type: "button",
    className: "jsx-3262729362"
  }, __jsx("span", {
    className: "jsx-3262729362"
  }, "\uC88B\uC544\uC694"), __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-3262729362" + " " + "fa fa-heart-o"
  })), __jsx("span", {
    className: "jsx-3262729362"
  }, "\uB313\uAE00")))), __jsx(_components_profile_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3262729362"
  }, "#content.jsx-3262729362{margin:10px 0;overflow:hidden;}.left_content.jsx-3262729362{float:left;width:69%;margin-right:1%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ1MsQUFHMkIsQUFJSixXQUNELEdBSk0sT0FLQyxTQUpsQixPQUtBIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBTRVNTSU9OX0NIRUNLIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvc2FnYUxvZ2luUmVkdWNlcic7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxvZ2luID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zYWdhTG9naW4sIFtdKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBsb2dpblN0YXR1cyB9ID0gbG9naW47XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VTU0lPTl9DSEVDSyB9KTtcclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbbG9naW5TdGF0dXNdKTtcclxuICBjb25zdCBmb28gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnYWFhJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7bG9naW5TdGF0dXMgIT09ICdmYWlsZWQnICYmIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPu2UhOuhnO2VhOyCrOynhDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuydtOumhDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAg7J2066+47KeA7Iqs65287J2065OcXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Zm9vfSBvbktleURvd249e2Zvb30gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj7soovslYTsmpQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7rjJPquIA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAjY29udGVudHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZWZ0X2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjY5JTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKS5sb2dpblN0YXR1cyk7XHJcbi8vICAgaWYgKGNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKS5sb2dpblN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\index.jsx */"));
}; // Index.getInitialProps = (context) => {
//   console.log(context.store.getState().loginStatus);
//   if (context.store.getState().loginStatus === undefined) {
//     Router.push('/login');
//   }
// };


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5152a4f17d67a9683d72.hot-update.js.map