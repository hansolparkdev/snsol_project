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
    className: "jsx-1156012261" + " " + "left_content"
  }, card.map(function (v, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-1156012261" + " " + "card main_card"
    }, __jsx("div", {
      className: "jsx-1156012261"
    }, __jsx("span", {
      className: "jsx-1156012261"
    }, v.user_id)), __jsx("div", {
      className: "jsx-1156012261"
    }, __jsx("span", {
      className: "jsx-1156012261"
    }, v.title)), __jsx("div", {
      className: "jsx-1156012261"
    }, v.desc), __jsx("div", {
      className: "jsx-1156012261" + " " + "like"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "jsx-1156012261" + " " + "fa fa-heart-o"
    }), ' ', __jsx("span", {
      className: "jsx-1156012261"
    }, v.likes.length)), __jsx("div", {
      className: "jsx-1156012261"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB313\uAE00",
      className: "jsx-1156012261" + " " + "reply_input"
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1156012261"
  }, ".left_content.jsx-1156012261{float:left;width:69%;margin-right:1%;}.main_card.jsx-1156012261{margin-bottom:10px;padding:10px;}.reply_input.jsx-1156012261{border:1px solid rgba(0,0,0,.125);width:100%;border-radius:5px;padding-left:10px;height:30px;}.like.jsx-1156012261 i.jsx-1156012261{color:red;font-weight:700;font-size:13px;}.like.jsx-1156012261 span.jsx-1156012261{font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNTLEFBR3VCLEFBS1EsQUFJZSxBQU94QixBQUtLLFVBSkMsQ0FoQk4sSUFxQlgsSUFoQmMsRUFKSSxLQWdCRixNQVhoQixFQUdZLEdBUFosSUFnQkEsSUFSbUIsa0JBQ0Esa0JBQ04sWUFDYiIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXG1haW5cXENhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRkVUQ0hfQ0FSRFNfU1RBUlQgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9jYXJkUmVkdWNlcic7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ2luID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zYWdhTG9naW4sIFtdKTtcclxuICBjb25zdCB7IGZldGNoU3RhdGUsIGNhcmQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FyZCwgW10pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NBUkRTX1NUQVJULCBwYXlsb2FkOiBsb2dpbi51c2VybmFtZSB9KTtcclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgLy8gY29uc29sZS5sb2coY2FyZCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2NvbnRlbnRcIj5cclxuICAgICAgICB7Y2FyZC5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYWluX2NhcmRcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2LnVzZXJfaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj57di50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt2LmRlc2N9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInJlcGx5X2lucHV0XCIgcGxhY2Vob2xkZXI9XCLrjJPquIBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxlZnRfY29udGVudHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NjklO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW5fY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtlIGl7XHJcbiAgICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtlIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.108868cebe037e755a99.hot-update.js.map