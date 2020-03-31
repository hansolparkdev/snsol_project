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

  var clickLike = function clickLike(v) {
    console.log('like', login.username, v.board_id);
    var payload = {
      username: login.username,
      board_id: v.board_id
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_4__["LIKE_CARD_REQUEST"],
      payload: payload
    });
  };

  var clickUnLike = function clickUnLike(v) {
    console.log('unlike', login.username, v.board_id);
    var payload = {
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
    var payload = {
      username: login.username,
      board_id: v.board_id,
      desc: reply[i]
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_CARD_REPLY_REQUEST"],
      payload: payload
    });
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
            return clickLike(v);
          },
          className: "jsx-2128665902" + " " + "fa fa-heart-o"
        });
      }

      return __jsx("i", {
        "aria-hidden": "true",
        onClick: function onClick() {
          return clickUnLike(v);
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
  }, ".left_content.jsx-2128665902{float:left;width:69%;margin-right:1%;}.main_card.jsx-2128665902{margin-bottom:10px;padding:10px;}.reply_input.jsx-2128665902{border:1px solid rgba(0,0,0,.125);width:90%;border-radius:5px;padding-left:10px;height:30px;}.reply_btn.jsx-2128665902{border:1px solid rgba(0,0,0,.125);width:10%;height:30px;border-radius:5px;}.like.jsx-2128665902{margin:5px 0;}.like.jsx-2128665902 i.jsx-2128665902{color:red;font-weight:700;font-size:13px;cursor:pointer;}.like.jsx-2128665902 span.jsx-2128665902{font-size:12px;}.reply_indi.jsx-2128665902{margin:5px 0;padding-left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dTLEFBR3VCLEFBS1EsQUFJZSxBQU9BLEFBTXJCLEFBR0gsQUFNSyxBQUdGLFVBUkcsQ0F6Qk4sRUFzQlgsQUFZb0IsRUFIcEIsSUExQmMsRUFKSSxLQXlCRixLQVNoQixDQTdCQSxFQUdXLEFBT0EsR0FkWCxJQXlCZ0IsR0FqQkcsQUFPTixZQUNNLEFBVW5CLE1BakJtQixZQVFuQixNQVBhLFlBQ2IiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHNuc29sX3Byb2plY3RcXGZyb250ZW5kXFxjb21wb25lbnRzXFxtYWluXFxDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgXHJcbiAgRkVUQ0hfQ0FSRFNfU1RBUlQsIExJS0VfQ0FSRF9SRVFVRVNULFxyXG4gIFVOTElLRV9DQVJEX1JFUVVFU1QsIEFERF9DQVJEX1JFUExZX1JFUVVFU1RcclxufSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9jYXJkUmVkdWNlcic7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ2luID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zYWdhTG9naW4sIFtdKTtcclxuICBjb25zdCB7IGZldGNoU3RhdGUsIGNhcmQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FyZCwgW10pO1xyXG4gIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NBUkRTX1NUQVJULCBwYXlsb2FkOiBsb2dpbi51c2VybmFtZSB9KTtcclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgLy8gY29uc29sZS5sb2coY2FyZCk7XHJcbiAgY29uc3QgY2xpY2tMaWtlID0gKHYpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdsaWtlJywgbG9naW4udXNlcm5hbWUsIHYuYm9hcmRfaWQpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luLnVzZXJuYW1lLFxyXG4gICAgICBib2FyZF9pZDogdi5ib2FyZF9pZCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExJS0VfQ0FSRF9SRVFVRVNULCBwYXlsb2FkIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2xpY2tVbkxpa2UgPSAodikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3VubGlrZScsIGxvZ2luLnVzZXJuYW1lLCB2LmJvYXJkX2lkKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBsb2dpbi51c2VybmFtZSxcclxuICAgICAgYm9hcmRfaWQ6IHYuYm9hcmRfaWQsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBVTkxJS0VfQ0FSRF9SRVFVRVNULCBwYXlsb2FkIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlUmVwbHkgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVwbHkoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXBseSk7XHJcbiAgfTtcclxuICBjb25zdCBpbnNlcklucHV0ID0gKHYsIGkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXBseScsIGxvZ2luLnVzZXJuYW1lLCB2LmJvYXJkX2lkLCByZXBseVtpXSk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICB1c2VybmFtZTogbG9naW4udXNlcm5hbWUsXHJcbiAgICAgIGJvYXJkX2lkOiB2LmJvYXJkX2lkLFxyXG4gICAgICBkZXNjOiByZXBseVtpXSxcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX0NBUkRfUkVQTFlfUkVRVUVTVCwgcGF5bG9hZCB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9jb250ZW50XCI+XHJcbiAgICAgICAge2NhcmQubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWFpbl9jYXJkXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj57di51c2VyX2lkfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3YudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7di5kZXNjfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlXCI+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKCh1c2VybmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB2Lmxpa2VzLmZpbmRJbmRleCgoZSkgPT4gZS51c2VyX2lkID09PSB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0xpa2Uodil9IC8+O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IGNsaWNrVW5MaWtlKHYpfSAvPjtcclxuICAgICAgICAgICAgICAgIH0pKGxvZ2luLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB2Lmxpa2VzLmxlbmd0aCA9PT0gMCA/IDBcclxuICAgICAgICAgICAgICAgICAgICA6IHYubGlrZXMubGVuZ3RoID09PSAxID8gYCR7di5saWtlc1swXS51c2VyX2lkfeuLmOydtCDsoovslYTtlanri4jri6QuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBgJHt2Lmxpa2VzWzBdLnVzZXJfaWR964uYIOyZuCAke3YubGlrZXMubGVuZ3RoIC0gMX3rqoXsnbQg7KKL7JWE7ZWp64uI64ukLmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInJlcGx5X2lucHV0XCIgdmFsdWU9e3JlcGx5Lml9IG5hbWU9e2l9IHBsYWNlaG9sZGVyPVwi64yT6riAXCIgb25DaGFuZ2U9e2NoYW5nZVJlcGx5fSAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicmVwbHlfYnRuXCIgdmFsdWU9XCLsnoXroKVcIiBvbkNsaWNrPXsoKSA9PiBpbnNlcklucHV0KHYsIGkpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2LnJlcGxpZXMubWFwKChlLCB2aSkgPT4gPGRpdiBjbGFzc05hbWU9XCJyZXBseV9pbmRpXCIga2V5PXt2aX0+e2Ake3YucmVwbGllc1t2aV0udXNlcl9pZH0gOiAke3YucmVwbGllc1t2aV0uZGVzY31gfTwvZGl2PilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubGVmdF9jb250ZW50e1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDo2OSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbl9jYXJke1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBseV9pbnB1dHtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfYnRue1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpa2V7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtlIGl7XHJcbiAgICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBseV9pbmRpe1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.06b12f2dba77708716df.hot-update.js.map