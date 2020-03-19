webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/sagas/login.js":
/*!******************************!*\
  !*** ./redux/sagas/login.js ***!
  \******************************/
/*! exports provided: watchSetUsername, watchSetUserpassword, watchLogin, watchSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSetUsername", function() { return watchSetUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSetUserpassword", function() { return watchSetUserpassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchLogin", function() { return watchLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSession", function() { return watchSession; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");



 // import { SAGA_SIGN_IN } from '../reducers/sagaLoginReducer';

var setUsername = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function setUsername(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function setUsername$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SET_USERNAME_STARTED"],
            payload: action.payload
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, setUsername);
});

var setPassword = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function setPassword(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function setPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SET_PASSWORD_STARTED"],
            payload: action.payload
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, setPassword);
});

var doLogin = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function doLogin(action) {
  var json, _ref, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function doLogin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["DO_LOGIN_STARTED"]
          });

        case 3:
          json = {
            uid: action.payload.username,
            upw: action.payload.password
          }; // console.log(json);

          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([axios__WEBPACK_IMPORTED_MODULE_2___default.a, 'post'], 'http://127.0.0.1:3001/auth/signin', json, {
            withCredentials: true // 쿠키를 주고받을 수 있게됨

          });

        case 6:
          _ref = _context3.sent;
          data = _ref.data;
          _context3.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["DO_LOGIN_SUCCESS"]
          });

        case 10:
          _context3.next = 16;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["DO_LOGIN_FAIL"]
          });

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, doLogin, null, [[0, 12]]);
});

var sessionCheck = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function sessionCheck() {
  var _ref2, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sessionCheck$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SESSION_CHECK_STARTED"],
            payload: data
          });

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([axios__WEBPACK_IMPORTED_MODULE_2___default.a, 'get'], 'http://127.0.0.1:3001/auth/session_check', {
            withCredentials: true
          });

        case 5:
          _ref2 = _context4.sent;
          data = _ref2.data;
          console.log(data.session_data.user);

          if (!(data.session_data.user === '')) {
            _context4.next = 11;
            break;
          }

          _context4.next = 13;
          break;

        case 11:
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SESSION_CHECK_STARTED"],
            payload: data
          });

        case 13:
          _context4.next = 19;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({});

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, sessionCheck, null, [[0, 15]]);
}); // watch


var watchSetUsername = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchSetUsername() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSetUsername$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SET_USERNAME"], setUsername);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, watchSetUsername);
});
var watchSetUserpassword = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchSetUserpassword() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSetUserpassword$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SET_PASSWORD"], setPassword);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, watchSetUserpassword);
});
var watchLogin = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchLogin() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["DO_LOGIN"], doLogin);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, watchLogin);
});
var watchSession = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function wathchSession() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function wathchSession$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_3__["SESSION_CHECK"], sessionCheck);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, wathchSession);
});

/***/ })

})
//# sourceMappingURL=_app.js.8af57526ea89618c44cd.hot-update.js.map