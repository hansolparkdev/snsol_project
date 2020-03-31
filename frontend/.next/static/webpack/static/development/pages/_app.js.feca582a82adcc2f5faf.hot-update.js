webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/sagas/card.js":
/*!*****************************!*\
  !*** ./redux/sagas/card.js ***!
  \*****************************/
/*! exports provided: watchFetchCard, watchLikeCard, watchUnLikeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchFetchCard", function() { return watchFetchCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchLikeCard", function() { return watchLikeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchUnLikeCard", function() { return watchUnLikeCard; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/cardReducer */ "./redux/reducers/cardReducer.js");



 // import { SAGA_SIGN_IN } from '../reducers/sagaLoginReducer';

var fetchCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function fetchFollowing(action) {
  var _ref, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchFollowing$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_START_STARTED"]
          });

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([axios__WEBPACK_IMPORTED_MODULE_2___default.a, 'get'], "http://127.0.0.1:3001/cards?userId=".concat(action.payload), {
            withCredentials: true
          });

        case 5:
          _ref = _context.sent;
          data = _ref.data;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_SUCCESS_STARTED"],
            payload: data
          });

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_FAIL_STARTED"]
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, fetchFollowing, null, [[0, 11]]);
});

var likeCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function LikeCard(action) {
  var likeData, _ref2, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function LikeCard$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          likeData = {
            boardId: action.payload.board_id,
            userId: action.payload.username
          }; // console.log(likeData);

          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([axios__WEBPACK_IMPORTED_MODULE_2___default.a, 'post'], 'http://127.0.0.1:3001/insertLike', likeData, {
            withCredentials: true
          });

        case 4:
          _ref2 = _context2.sent;
          data = _ref2.data;
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_CARD_SUCCESS"],
            payload: data
          });

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_CARDS_FAIL"]
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, LikeCard, null, [[0, 10]]);
});

var unLikeCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function LikeCard(action) {
  var unlikeData, _ref3, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function LikeCard$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          unlikeData = {
            // index: action.payload.index,
            boardId: action.payload.board_id,
            userId: action.payload.username
          };
          console.log(unlikeData);
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([axios__WEBPACK_IMPORTED_MODULE_2___default.a, 'post'], 'http://127.0.0.1:3001/deleteLike', unlikeData, {
            withCredentials: true
          });

        case 5:
          _ref3 = _context3.sent;
          data = _ref3.data;
          console.log(data); // yield put();

          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])();

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, LikeCard, null, [[0, 10]]);
});

var watchFetchCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchFetchCard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFetchCard$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_START"], fetchCard);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, watchFetchCard);
});
var watchLikeCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchLikeCard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikeCard$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_CARD_REQUEST"], likeCard);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, watchLikeCard);
});
var watchUnLikeCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchUnLikeCard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnLikeCard$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_CARD_REQUEST"], unLikeCard);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, watchUnLikeCard);
});

/***/ })

})
//# sourceMappingURL=_app.js.feca582a82adcc2f5faf.hot-update.js.map