webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/sagas/card.js":
/*!*****************************!*\
  !*** ./redux/sagas/card.js ***!
  \*****************************/
/*! exports provided: watchFetchCard, watchLikeCard, watchUnLikeCard, watchAddReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchFetchCard", function() { return watchFetchCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchLikeCard", function() { return watchLikeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchUnLikeCard", function() { return watchUnLikeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchAddReply", function() { return watchAddReply; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/cardReducer */ "./redux/reducers/cardReducer.js");



 // import { SAGA_SIGN_IN } from '../reducers/sagaLoginReducer';

var fetchCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function fetchFollowing(action) {
  var _ref, _data;

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
          _data = _ref.data;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_SUCCESS_STARTED"],
            payload: _data
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
  var likeData, _ref2, _data2;

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
          _data2 = _ref2.data;
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_CARD_SUCCESS"],
            payload: _data2
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
  var unlikeData, _ref3, _data3;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function LikeCard$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          unlikeData = {
            // index: action.payload.index,
            boardId: action.payload.board_id,
            userId: action.payload.username
          }; // console.log(unlikeData);

          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([axios__WEBPACK_IMPORTED_MODULE_2___default.a, 'post'], 'http://127.0.0.1:3001/deleteLike', unlikeData, {
            withCredentials: true
          });

        case 4:
          _ref3 = _context3.sent;
          _data3 = _ref3.data;

          if (!(_data3 === true)) {
            _context3.next = 9;
            break;
          }

          _context3.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_CARD_SUCCESS"],
            payload: unlikeData
          });

        case 9:
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_CARDS_FAIL"]
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, LikeCard, null, [[0, 11]]);
});

var addReply = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function addReply(action) {
  var addReplyData, _ref4, _data4;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addReply$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log('aaa');
          addReplyData = {
            // index: action.payload.index,
            boardId: action.payload.board_id,
            userId: action.payload.username,
            desc: action.payload.desc
          };
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([axios__WEBPACK_IMPORTED_MODULE_2___default.a, 'post'], 'http://127.0.0.1:3001/addReply', addReplyData, {
            withCredentials: true
          });

        case 5:
          _ref4 = _context4.sent;
          _data4 = _ref4.data;
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_CARD_REPLY_SUCCESS"],
            payload: _data4
          });

        case 9:
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_CARD_REPLY_FAIL"]
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, addReply, null, [[0, 11]]);
});

var delReply = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function delReply(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function delReply$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["DEL_CARD_REPLY_SUCCESS"],
            payload: data
          });

        case 3:
          _context5.next = 9;
          break;

        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["DEL_CARD_REPLY_FAIL"]
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, delReply, null, [[0, 5]]);
});

var watchFetchCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchFetchCard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFetchCard$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_START"], fetchCard);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, watchFetchCard);
});
var watchLikeCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchLikeCard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikeCard$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_CARD_REQUEST"], likeCard);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, watchLikeCard);
});
var watchUnLikeCard = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchUnLikeCard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnLikeCard$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_CARD_REQUEST"], unLikeCard);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, watchUnLikeCard);
});
var watchAddReply = /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watchAddReply() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddReply$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_CARD_REPLY_REQUEST"], addReply);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, watchAddReply);
});

/***/ })

})
//# sourceMappingURL=_app.js.e29bf71b2cc81a1df6ae.hot-update.js.map