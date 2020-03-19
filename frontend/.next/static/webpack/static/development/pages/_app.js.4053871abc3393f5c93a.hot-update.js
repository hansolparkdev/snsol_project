webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/sagaLoginReducer.js":
/*!********************************************!*\
  !*** ./redux/reducers/sagaLoginReducer.js ***!
  \********************************************/
/*! exports provided: SET_USERNAME_STARTED, SET_PASSWORD_STARTED, DO_LOGIN_STARTED, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL, SESSION_CHECK_STARTED, SESSION_CHECK_HAVE, SESSION_CHECK_NONE, SET_USERNAME, SET_PASSWORD, DO_LOGIN, SESSION_CHECK, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME_STARTED", function() { return SET_USERNAME_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_STARTED", function() { return SET_PASSWORD_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN_STARTED", function() { return DO_LOGIN_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN_SUCCESS", function() { return DO_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN_FAIL", function() { return DO_LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK_STARTED", function() { return SESSION_CHECK_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK_HAVE", function() { return SESSION_CHECK_HAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK_NONE", function() { return SESSION_CHECK_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME", function() { return SET_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD", function() { return SET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_LOGIN", function() { return DO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CHECK", function() { return SESSION_CHECK; });
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* eslint-disable camelcase */
var SET_USERNAME_STARTED = 'SET_USERNAME_STARTED';
var SET_PASSWORD_STARTED = 'SET_PASSWORD_STARTED';
var DO_LOGIN_STARTED = 'DO_LOGIN_STARTED';
var DO_LOGIN_SUCCESS = 'DO_LOGIN_SUCCESS';
var DO_LOGIN_FAIL = 'DO_LOGIN_FAIL';
var SESSION_CHECK_STARTED = 'SESSION_CHECK_STARTED';
var SESSION_CHECK_HAVE = 'SESSION_CHECK_HAVE';
var SESSION_CHECK_NONE = 'SESSION_CHECK_NONE'; // SAGA Action

var SET_USERNAME = 'SET_USERNAME';
var SET_PASSWORD = 'SET_PASSWORD';
var DO_LOGIN = 'DO_LOGIN';
var SESSION_CHECK = 'SESSION_CHECK';
var initialState = {
  username: '',
  password: '',
  name: '',
  loginStatus: 'failed',
  loginErrorMsg: ''
};

var sagaLoginReducer = function sagaLoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USERNAME_STARTED:
      {
        return _objectSpread({}, state, {
          username: action.payload
        });
      }

    case SET_PASSWORD_STARTED:
      {
        return _objectSpread({}, state, {
          password: action.payload
        });
      }

    case DO_LOGIN_STARTED:
      {
        return _objectSpread({}, state, {
          loginStatus: 'ongoing'
        });
      }

    case DO_LOGIN_SUCCESS:
      {
        return _objectSpread({}, state, {
          loginStatus: 'success'
        });
      }

    case DO_LOGIN_FAIL:
      {
        return _objectSpread({}, state, {
          loginStatus: 'failed'
        });
      }

    case SESSION_CHECK_STARTED:
      {
        return _objectSpread({}, state);
      }

    case SESSION_CHECK_HAVE:
      {
        var _action$payload$sessi = action.payload.session_data.user,
            user_id = _action$payload$sessi.user_id,
            name = _action$payload$sessi.name;
        var username = user_id;
        return _objectSpread({}, state, {
          username: username,
          name: name,
          loginStatus: 'success'
        });
      }

    case SESSION_CHECK_NONE:
      {
        return _objectSpread({}, state, {
          loginStatus: 'failed'
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sagaLoginReducer);

/***/ })

})
//# sourceMappingURL=_app.js.4053871abc3393f5c93a.hot-update.js.map