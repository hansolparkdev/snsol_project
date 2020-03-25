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
    className: "jsx-1722595682" + " " + "left_content"
  }, card.map(function (v, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-1722595682" + " " + "card main_card"
    }, __jsx("div", {
      className: "jsx-1722595682"
    }, __jsx("span", {
      className: "jsx-1722595682"
    }, v.user_id)), __jsx("div", {
      className: "jsx-1722595682"
    }, __jsx("span", {
      className: "jsx-1722595682"
    }, v.title)), __jsx("div", {
      className: "jsx-1722595682"
    }, v.desc), __jsx("div", {
      className: "jsx-1722595682" + " " + "like"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "jsx-1722595682" + " " + "fa fa-heart-o"
    }), ' ', __jsx("span", {
      className: "jsx-1722595682"
    }, v.likes.length == 0 ? 0 : v.likes[0].user_id, "\uB2D8 \uC678", v.likes.length)), __jsx("div", {
      className: "jsx-1722595682"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB313\uAE00",
      className: "jsx-1722595682" + " " + "reply_input"
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1722595682"
  }, ".left_content.jsx-1722595682{float:left;width:69%;margin-right:1%;}.main_card.jsx-1722595682{margin-bottom:10px;padding:10px;}.reply_input.jsx-1722595682{border:1px solid rgba(0,0,0,.125);width:100%;border-radius:5px;padding-left:10px;height:30px;}.like.jsx-1722595682{margin:5px 0;}.like.jsx-1722595682 i.jsx-1722595682{color:red;font-weight:700;font-size:13px;}.like.jsx-1722595682 span.jsx-1722595682{font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNTLEFBR3VCLEFBS1EsQUFJZSxBQU9yQixBQUdILEFBS0ssVUFKQyxDQW5CTixFQWdCWCxFQVFBLElBbkJjLEVBSkksS0FtQkYsTUFkaEIsRUFHWSxHQVBaLElBbUJBLElBWG1CLGtCQUNBLGtCQUNOLFlBQ2IiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHNuc29sX3Byb2plY3RcXGZyb250ZW5kXFxjb21wb25lbnRzXFxtYWluXFxDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZFVENIX0NBUkRTX1NUQVJUIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvY2FyZFJlZHVjZXInO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUxvZ2luLCBbXSk7XHJcbiAgY29uc3QgeyBmZXRjaFN0YXRlLCBjYXJkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcmQsIFtdKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVJEU19TVEFSVCwgcGF5bG9hZDogbG9naW4udXNlcm5hbWUgfSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGNhcmQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9jb250ZW50XCI+XHJcbiAgICAgICAge2NhcmQubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWFpbl9jYXJkXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj57di51c2VyX2lkfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3YudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7di5kZXNjfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8c3Bhbj57di5saWtlcy5sZW5ndGggPT0gMCA/IDAgOiB2Lmxpa2VzWzBdLnVzZXJfaWR964uYIOyZuHt2Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInJlcGx5X2lucHV0XCIgcGxhY2Vob2xkZXI9XCLrjJPquIBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxlZnRfY29udGVudHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NjklO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW5fY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtle1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSBpe1xyXG4gICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.2218da6c847bd88f716e.hot-update.js.map