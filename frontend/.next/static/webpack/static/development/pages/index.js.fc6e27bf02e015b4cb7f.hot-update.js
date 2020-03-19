webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_profile_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/profile/Profile */ "./components/profile/Profile.jsx");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Index = function Index(props) {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);
  var loginStatus = login.loginStatus;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var result, user;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default()('http://127.0.0.1:3001/auth/session_check', {
                withCredentials: true // 쿠키를 주고받을 수 있게됨

              }));

            case 2:
              result = _context.sent;
              user = result.data.session_data;
              console.log(user);

              if (user.user === '') {
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');
              } else {
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
    };

    fetchData();
  }, [loginStatus]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {});

  var foo = function foo() {
    console.log('aaa');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, __jsx("div", {
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
  }, "\uB313\uAE00")))), __jsx(_components_profile_Profile__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3262729362"
  }, "#content.jsx-3262729362{margin:10px 0;overflow:hidden;}.left_content.jsx-3262729362{float:left;width:69%;margin-right:1%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RFMsQUFHMkIsQUFJSixXQUNELEdBSk0sT0FLQyxTQUpsQixPQUtBIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGUnO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUxvZ2luLCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgbG9naW5TdGF0dXMgfSA9IGxvZ2luO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcygnaHR0cDovLzEyNy4wLjAuMTozMDAxL2F1dGgvc2Vzc2lvbl9jaGVjaycsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsIC8vIOy/oO2CpOulvCDso7zqs6DrsJvsnYQg7IiYIOyeiOqyjOuQqFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC5kYXRhLnNlc3Npb25fZGF0YTtcclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIGlmICh1c2VyLnVzZXIgPT09ICcnKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbbG9naW5TdGF0dXNdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIH0pO1xyXG4gIGNvbnN0IGZvbyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPu2UhOuhnO2VhOyCrOynhDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj7snbTrpoQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIOydtOuvuOyngOyKrOudvOydtOuTnFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Zvb30gb25LZXlEb3duPXtmb299IHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuyii+yVhOyalDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuuMk+q4gDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgI2NvbnRlbnR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGVmdF9jb250ZW50e1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDo2OSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gKGNvbnRleHQpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhjb250ZXh0LnN0b3JlLmdldFN0YXRlKCkubG9naW5TdGF0dXMpO1xyXG4vLyAgIGlmIChjb250ZXh0LnN0b3JlLmdldFN0YXRlKCkubG9naW5TdGF0dXMgPT09IHVuZGVmaW5lZCkge1xyXG4vLyAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\index.jsx */"));
}; // Index.getInitialProps = (context) => {
//   console.log(context.store.getState().loginStatus);
//   if (context.store.getState().loginStatus === undefined) {
//     Router.push('/login');
//   }
// };


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fc6e27bf02e015b4cb7f.hot-update.js.map