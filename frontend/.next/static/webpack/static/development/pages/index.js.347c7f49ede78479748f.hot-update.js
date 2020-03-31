webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/main/Card.jsx":
/*!**********************************!*\
  !*** ./components/main/Card.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/reducers/cardReducer */ "./redux/reducers/cardReducer.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable no-nested-ternary */

/* eslint-disable no-unused-expressions */




var Card = function Card() {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.card;
  }, []),
      fetchState = _useSelector.fetchState,
      card = _useSelector.card;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      reply = _useState[0],
      setReply = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData = function fetchData() {
      dispatch({
        type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_4__["FETCH_CARDS_START"],
        payload: login.username
      });
    };

    fetchData();
  }, []); // console.log(card);

  var clickLike = function clickLike(v, i) {
    console.log('like', login.username, v.board_id);
    var payload = {
      index: i,
      username: login.username,
      board_id: v.board_id
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_4__["LIKE_CARD_REQUEST"],
      payload: payload
    });
  };

  var clickUnLike = function clickUnLike(v, i) {
    console.log('unlike', login.username, v.board_id);
    var payload = {
      index: i,
      username: login.username,
      board_id: v.board_id
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_CARD_REQUEST"],
      payload: payload
    });
  };

  var changeReply = function changeReply(e) {
    setReply(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    console.log(reply);
  };

  var inserInput = function inserInput(v, i) {
    console.log('reply', login.username, v.board_id, reply[i]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
    className: "jsx-2128665902" + " " + "left_content"
  }, card.map(function (v, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-2128665902" + " " + "card main_card"
    }, __jsx("div", {
      className: "jsx-2128665902"
    }, __jsx("span", {
      className: "jsx-2128665902"
    }, v.user_id)), __jsx("div", {
      className: "jsx-2128665902"
    }, __jsx("span", {
      className: "jsx-2128665902"
    }, v.title)), __jsx("div", {
      className: "jsx-2128665902"
    }, v.desc), __jsx("div", {
      className: "jsx-2128665902" + " " + "like"
    }, function (username) {
      var filter = v.likes.findIndex(function (e) {
        return e.user_id === username;
      });

      if (filter === -1) {
        return __jsx("i", {
          "aria-hidden": "true",
          onClick: function onClick() {
            return clickLike(v, i);
          },
          className: "jsx-2128665902" + " " + "fa fa-heart-o"
        });
      }

      return __jsx("i", {
        "aria-hidden": "true",
        onClick: function onClick() {
          return clickUnLike(v, i);
        },
        className: "jsx-2128665902" + " " + "fa fa-heart"
      });
    }(login.username), ' ', __jsx("span", {
      className: "jsx-2128665902"
    }, v.likes.length === 0 ? 0 : v.likes.length === 1 ? "".concat(v.likes[0].user_id, "\uB2D8\uC774 \uC88B\uC544\uD569\uB2C8\uB2E4.") : "".concat(v.likes[0].user_id, "\uB2D8 \uC678 ").concat(v.likes.length - 1, "\uBA85\uC774 \uC88B\uC544\uD569\uB2C8\uB2E4."))), __jsx("div", {
      className: "jsx-2128665902"
    }, __jsx("input", {
      type: "text",
      value: reply.i,
      name: i,
      placeholder: "\uB313\uAE00",
      onChange: changeReply,
      className: "jsx-2128665902" + " " + "reply_input"
    }), __jsx("input", {
      type: "button",
      value: "\uC785\uB825",
      onClick: function onClick() {
        return inserInput(v, i);
      },
      className: "jsx-2128665902" + " " + "reply_btn"
    })), __jsx("div", {
      className: "jsx-2128665902"
    }, v.replies.map(function (e, vi) {
      return __jsx("div", {
        key: vi,
        className: "jsx-2128665902" + " " + "reply_indi"
      }, "".concat(v.replies[vi].user_id, " : ").concat(v.replies[vi].desc));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2128665902"
  }, ".left_content.jsx-2128665902{float:left;width:69%;margin-right:1%;}.main_card.jsx-2128665902{margin-bottom:10px;padding:10px;}.reply_input.jsx-2128665902{border:1px solid rgba(0,0,0,.125);width:90%;border-radius:5px;padding-left:10px;height:30px;}.reply_btn.jsx-2128665902{border:1px solid rgba(0,0,0,.125);width:10%;height:30px;border-radius:5px;}.like.jsx-2128665902{margin:5px 0;}.like.jsx-2128665902 i.jsx-2128665902{color:red;font-weight:700;font-size:13px;cursor:pointer;}.like.jsx-2128665902 span.jsx-2128665902{font-size:12px;}.reply_indi.jsx-2128665902{margin:5px 0;padding-left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZTLEFBR3VCLEFBS1EsQUFJZSxBQU9BLEFBTXJCLEFBR0gsQUFNSyxBQUdGLFVBUkcsQ0F6Qk4sRUFzQlgsQUFZb0IsRUFIcEIsSUExQmMsRUFKSSxLQXlCRixLQVNoQixDQTdCQSxFQUdXLEFBT0EsR0FkWCxJQXlCZ0IsR0FqQkcsQUFPTixZQUNNLEFBVW5CLE1BakJtQixZQVFuQixNQVBhLFlBQ2IiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHNuc29sX3Byb2plY3RcXGZyb250ZW5kXFxjb21wb25lbnRzXFxtYWluXFxDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRkVUQ0hfQ0FSRFNfU1RBUlQsIExJS0VfQ0FSRF9SRVFVRVNULCBVTkxJS0VfQ0FSRF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvY2FyZFJlZHVjZXInO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUxvZ2luLCBbXSk7XHJcbiAgY29uc3QgeyBmZXRjaFN0YXRlLCBjYXJkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcmQsIFtdKTtcclxuICBjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVJEU19TVEFSVCwgcGF5bG9hZDogbG9naW4udXNlcm5hbWUgfSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGNhcmQpO1xyXG4gIGNvbnN0IGNsaWNrTGlrZSA9ICh2LCBpKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbGlrZScsIGxvZ2luLnVzZXJuYW1lLCB2LmJvYXJkX2lkKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIGluZGV4OiBpLFxyXG4gICAgICB1c2VybmFtZTogbG9naW4udXNlcm5hbWUsXHJcbiAgICAgIGJvYXJkX2lkOiB2LmJvYXJkX2lkLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogTElLRV9DQVJEX1JFUVVFU1QsIHBheWxvYWQgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjbGlja1VuTGlrZSA9ICh2LCBpKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndW5saWtlJywgbG9naW4udXNlcm5hbWUsIHYuYm9hcmRfaWQpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgaW5kZXg6IGksXHJcbiAgICAgIHVzZXJuYW1lOiBsb2dpbi51c2VybmFtZSxcclxuICAgICAgYm9hcmRfaWQ6IHYuYm9hcmRfaWQsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBVTkxJS0VfQ0FSRF9SRVFVRVNULCBwYXlsb2FkIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlUmVwbHkgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVwbHkoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXBseSk7XHJcbiAgfTtcclxuICBjb25zdCBpbnNlcklucHV0ID0gKHYsIGkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXBseScsIGxvZ2luLnVzZXJuYW1lLCB2LmJvYXJkX2lkLCByZXBseVtpXSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfY29udGVudFwiPlxyXG4gICAgICAgIHtjYXJkLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1haW5fY2FyZFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3YudXNlcl9pZH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3YuZGVzY31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZVwiPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgodXNlcm5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gdi5saWtlcy5maW5kSW5kZXgoKGUpID0+IGUudXNlcl9pZCA9PT0gdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gY2xpY2tMaWtlKHYsIGkpfSAvPjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBjbGlja1VuTGlrZSh2LCBpKX0gLz47XHJcbiAgICAgICAgICAgICAgICB9KShsb2dpbi51c2VybmFtZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdi5saWtlcy5sZW5ndGggPT09IDAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2Lmxpa2VzLmxlbmd0aCA9PT0gMSA/IGAke3YubGlrZXNbMF0udXNlcl9pZH3ri5jsnbQg7KKL7JWE7ZWp64uI64ukLmBcclxuICAgICAgICAgICAgICAgICAgICAgIDogYCR7di5saWtlc1swXS51c2VyX2lkfeuLmCDsmbggJHt2Lmxpa2VzLmxlbmd0aCAtIDF966qF7J20IOyii+yVhO2VqeuLiOuLpC5gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJyZXBseV9pbnB1dFwiIHZhbHVlPXtyZXBseS5pfSBuYW1lPXtpfSBwbGFjZWhvbGRlcj1cIuuMk+q4gFwiIG9uQ2hhbmdlPXtjaGFuZ2VSZXBseX0gLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInJlcGx5X2J0blwiIHZhbHVlPVwi7J6F66ClXCIgb25DbGljaz17KCkgPT4gaW5zZXJJbnB1dCh2LCBpKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdi5yZXBsaWVzLm1hcCgoZSwgdmkpID0+IDxkaXYgY2xhc3NOYW1lPVwicmVwbHlfaW5kaVwiIGtleT17dml9PntgJHt2LnJlcGxpZXNbdmldLnVzZXJfaWR9IDogJHt2LnJlcGxpZXNbdmldLmRlc2N9YH08L2Rpdj4pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxlZnRfY29udGVudHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NjklO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW5fY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2J0bntcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgICAgICAgICB3aWR0aDoxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtle1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSBpe1xyXG4gICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpa2Ugc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5kaXtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.347c7f49ede78479748f.hot-update.js.map