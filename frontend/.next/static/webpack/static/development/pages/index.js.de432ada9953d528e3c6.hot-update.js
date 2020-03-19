webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_login_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/Login */ "./components/login/Login.jsx");
/* harmony import */ var _components_main_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/Main */ "./components/main/Main.jsx");
/* harmony import */ var _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index(props) {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var loginStatus = login.loginStatus;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var fetchData = function fetchData() {
      console.log(loginStatus);
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_6__["SESSION_CHECK"]
      });
    };

    fetchData();
  }, [loginStatus]);

  var foo = function foo() {
    console.log('aaa');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loginStatus !== 'failed' ? __jsx(_components_main_Main__WEBPACK_IMPORTED_MODULE_5__["default"], null) : __jsx(_components_login_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.de432ada9953d528e3c6.hot-update.js.map