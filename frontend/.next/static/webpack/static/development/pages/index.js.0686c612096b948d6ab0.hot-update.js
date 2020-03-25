webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/main/Card.jsx":
/*!**********************************!*\
  !*** ./components/main/Card.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/reducers/cardReducer */ "./redux/reducers/cardReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Card = function Card() {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.card;
  }, []),
      fetchState = _useSelector.fetchState,
      card = _useSelector.card;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      dispatch({
        type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_3__["FETCH_CARDS_START"],
        payload: login.username
      });
    };

    fetchData();
  }, []); // console.log(card);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-2429665835" + " " + "left_content"
  }, card.map(function (v, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-2429665835" + " " + "card main_card"
    }, __jsx("div", {
      className: "jsx-2429665835"
    }, __jsx("span", {
      className: "jsx-2429665835"
    }, v.user_id)), __jsx("div", {
      className: "jsx-2429665835"
    }, __jsx("span", {
      className: "jsx-2429665835"
    }, v.title)), __jsx("div", {
      className: "jsx-2429665835"
    }, v.desc), __jsx("div", {
      className: "jsx-2429665835" + " " + "like"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "jsx-2429665835" + " " + "fa fa-heart-o"
    }), ' ', __jsx("span", {
      className: "jsx-2429665835"
    }, v.likes.length)), __jsx("div", {
      className: "jsx-2429665835"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB313\uAE00",
      className: "jsx-2429665835" + " " + "reply_input"
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2429665835"
  }, ".left_content.jsx-2429665835{float:left;width:69%;margin-right:1%;}.main_card.jsx-2429665835{margin-bottom:10px;padding:10px;}.reply_input.jsx-2429665835{border:1px solid rgba(0,0,0,.125);width:100%;border-radius:5px;padding-left:10px;height:30px;}.like.jsx-2429665835 fa.jsx-2429665835{color:red;font-size:15px;}.like.jsx-2429665835 span.jsx-2429665835{font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNTLEFBR3VCLEFBS1EsQUFJZSxBQU94QixBQUlLLFVBSEEsQ0FoQkwsSUFvQlgsSUFmYyxFQUpJLElBZ0JsQixPQVhBLEVBR1ksR0FQWixRQVFtQixrQkFDQSxrQkFDTixZQUNiIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGRVRDSF9DQVJEU19TVEFSVCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2NhcmRSZWR1Y2VyJztcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhZ2FMb2dpbiwgW10pO1xyXG4gIGNvbnN0IHsgZmV0Y2hTdGF0ZSwgY2FyZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJkLCBbXSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FSRFNfU1RBUlQsIHBheWxvYWQ6IGxvZ2luLnVzZXJuYW1lIH0pO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICAvLyBjb25zb2xlLmxvZyhjYXJkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfY29udGVudFwiPlxyXG4gICAgICAgIHtjYXJkLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1haW5fY2FyZFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3YudXNlcl9pZH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3YuZGVzY31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3YubGlrZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicmVwbHlfaW5wdXRcIiBwbGFjZWhvbGRlcj1cIuuMk+q4gFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubGVmdF9jb250ZW50e1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDo2OSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbl9jYXJke1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBseV9pbnB1dHtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpa2UgZmF7XHJcbiAgICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.0686c612096b948d6ab0.hot-update.js.map