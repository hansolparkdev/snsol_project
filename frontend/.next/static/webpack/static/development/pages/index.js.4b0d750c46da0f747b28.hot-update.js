webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/reducers/cardReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cardReducer.js ***!
  \***************************************/
/*! exports provided: FETCH_CARDS_START_STARTED, FETCH_CARDS_SUCCESS_STARTED, FETCH_CARDS_FAIL_STARTED, LIKE_CARD_REQUEST_STARTED, LIKE_CARD_SUCCESS, LIKE_CARDS_FAIL, UNLIKE_CARD_REQUEST_STARTED, UNLIKE_CARD_SUCCESS, UNLIKE_CARDS_FAIL, ADD_CARD_REPLY_REQUEST_STARTED, ADD_CARD_REPLY_SUCCESS, ADD_CARD_REPLY_FAIL, DEL_CARD_REPLY_REQUEST_STARTED, DEL_CARD_REPLY_SUCCESS, DEL_CARD_REPLY_FAIL, FETCH_CARDS_START, LIKE_CARD_REQUEST, UNLIKE_CARD_REQUEST, ADD_CARD_REPLY_REQUEST, DEL_CARD_REPLY_REQUEST, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_START_STARTED", function() { return FETCH_CARDS_START_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_SUCCESS_STARTED", function() { return FETCH_CARDS_SUCCESS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_FAIL_STARTED", function() { return FETCH_CARDS_FAIL_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CARD_REQUEST_STARTED", function() { return LIKE_CARD_REQUEST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CARD_SUCCESS", function() { return LIKE_CARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CARDS_FAIL", function() { return LIKE_CARDS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_CARD_REQUEST_STARTED", function() { return UNLIKE_CARD_REQUEST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_CARD_SUCCESS", function() { return UNLIKE_CARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_CARDS_FAIL", function() { return UNLIKE_CARDS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD_REPLY_REQUEST_STARTED", function() { return ADD_CARD_REPLY_REQUEST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD_REPLY_SUCCESS", function() { return ADD_CARD_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD_REPLY_FAIL", function() { return ADD_CARD_REPLY_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_CARD_REPLY_REQUEST_STARTED", function() { return DEL_CARD_REPLY_REQUEST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_CARD_REPLY_SUCCESS", function() { return DEL_CARD_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_CARD_REPLY_FAIL", function() { return DEL_CARD_REPLY_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_START", function() { return FETCH_CARDS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CARD_REQUEST", function() { return LIKE_CARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_CARD_REQUEST", function() { return UNLIKE_CARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD_REPLY_REQUEST", function() { return ADD_CARD_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_CARD_REPLY_REQUEST", function() { return DEL_CARD_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* eslint-disable camelcase */
var FETCH_CARDS_START_STARTED = 'FETCH_CARDS_START_STARTED';
var FETCH_CARDS_SUCCESS_STARTED = 'FETCH_CARDS_SUCCESS_STARTED';
var FETCH_CARDS_FAIL_STARTED = 'FETCH_CARDS_FAIL_STARTED';
var LIKE_CARD_REQUEST_STARTED = 'LIKE_CARD_REQUEST_STARTED';
var LIKE_CARD_SUCCESS = 'LIKE_CARD_SUCCESS';
var LIKE_CARDS_FAIL = 'LIKE_CARDS_FAIL';
var UNLIKE_CARD_REQUEST_STARTED = 'UNLIKE_CARD_REQUEST_STARTED';
var UNLIKE_CARD_SUCCESS = 'UNLIKE_CARD_SUCCESS';
var UNLIKE_CARDS_FAIL = 'UNLIKE_CARDS_FAIL';
var ADD_CARD_REPLY_REQUEST_STARTED = 'ADD_CARD_REPLY_REQUEST_STARTED';
var ADD_CARD_REPLY_SUCCESS = 'ADD_CARD_REPLY_SUCCESS';
var ADD_CARD_REPLY_FAIL = 'ADD_CARD_REPLY_FAIL';
var DEL_CARD_REPLY_REQUEST_STARTED = 'DEL_CARD_REPLY_REQUEST_STARTED';
var DEL_CARD_REPLY_SUCCESS = 'DEL_CARD_REPLY_SUCCESS';
var DEL_CARD_REPLY_FAIL = 'DEL_CARD_REPLY_FAIL'; // 디스패치될 액션 값

var FETCH_CARDS_START = 'FETCH_CARDS_START';
var LIKE_CARD_REQUEST = 'LIKE_CARD_REQUEST';
var UNLIKE_CARD_REQUEST = 'UNLIKE_CARD_REQUEST';
var ADD_CARD_REPLY_REQUEST = 'ADD_CARD_REPLY_REQUEST';
var DEL_CARD_REPLY_REQUEST = 'DEL_CARD_REPLY_REQUEST';
var initialState = {
  fetchState: '',
  card: []
};

var cardReducer = function cardReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_CARDS_START_STARTED:
      {
        return _objectSpread({}, state, {
          fetchState: 'card_fetching'
        });
      }

    case FETCH_CARDS_SUCCESS_STARTED:
      {
        // console.log(action.payload);
        return _objectSpread({}, state, {
          card: action.payload,
          fetchState: 'card_fetching_success'
        });
      }

    case FETCH_CARDS_FAIL_STARTED:
      {
        return _objectSpread({}, state, {
          fetchState: 'card_fetching_fail'
        });
      }

    case LIKE_CARD_SUCCESS:
      {
        // console.log(action.payload);
        var _action$payload = action.payload,
            id = _action$payload.id,
            board_id = _action$payload.board_id,
            user_id = _action$payload.user_id,
            createdAt = _action$payload.createdAt,
            updatedAt = _action$payload.updatedAt;
        var cardIndex = state.card.findIndex(function (v) {
          return v.board_id === board_id;
        });

        var card = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.card);

        console.log(card[cardIndex]);
        return _objectSpread({}, state, {
          card: card
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cardReducer);

/***/ })

})
//# sourceMappingURL=index.js.4b0d750c46da0f747b28.hot-update.js.map