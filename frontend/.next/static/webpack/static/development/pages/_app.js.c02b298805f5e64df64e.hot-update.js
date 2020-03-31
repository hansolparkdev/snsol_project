webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/sagas/rootSaga.js":
/*!*********************************!*\
  !*** ./redux/sagas/rootSaga.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./redux/sagas/login.js");
/* harmony import */ var _follow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follow */ "./redux/sagas/follow.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ "./redux/sagas/card.js");


var _marked = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




 // all 함수를 통해 Saga들을 하나로 묶어줄수 있다.

function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_login__WEBPACK_IMPORTED_MODULE_2__["watchSetUsername"])(), Object(_login__WEBPACK_IMPORTED_MODULE_2__["watchSetUserpassword"])(), Object(_login__WEBPACK_IMPORTED_MODULE_2__["watchLogin"])(), Object(_login__WEBPACK_IMPORTED_MODULE_2__["watchSession"])(), Object(_follow__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_card__WEBPACK_IMPORTED_MODULE_4__["watchFetchCard"])(), Object(_card__WEBPACK_IMPORTED_MODULE_4__["watchLikeCard"])(), Object(_card__WEBPACK_IMPORTED_MODULE_4__["watchUnLikeCard"])(), Object(_card__WEBPACK_IMPORTED_MODULE_4__["watchAddReply"])(), Object(_card__WEBPACK_IMPORTED_MODULE_4__["watchDelReply"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/***/ })

})
//# sourceMappingURL=_app.js.c02b298805f5e64df64e.hot-update.js.map