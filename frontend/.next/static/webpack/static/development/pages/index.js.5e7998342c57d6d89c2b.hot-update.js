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

  var delReply = function delReply(v) {
    console.log('reply', login.username, v.board_id, v.replies);
    var payload = {
      username: login.username,
      board_id: v.board_id
    };
    dispatch({
      type: _redux_reducers_cardReducer__WEBPACK_IMPORTED_MODULE_4__["DEL_CARD_REPLY_REQUEST"],
      payload: payload
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
    className: "jsx-543435545" + " " + "left_content"
  }, card.map(function (v, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-543435545" + " " + "card main_card"
    }, __jsx("div", {
      className: "jsx-543435545"
    }, __jsx("span", {
      className: "jsx-543435545"
    }, v.user_id)), __jsx("div", {
      className: "jsx-543435545"
    }, __jsx("span", {
      className: "jsx-543435545"
    }, v.title)), __jsx("div", {
      className: "jsx-543435545"
    }, v.desc), __jsx("div", {
      className: "jsx-543435545" + " " + "like"
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
          className: "jsx-543435545" + " " + "fa fa-heart-o"
        });
      }

      return __jsx("i", {
        "aria-hidden": "true",
        onClick: function onClick() {
          return clickUnLike(v);
        },
        className: "jsx-543435545" + " " + "fa fa-heart"
      });
    }(login.username), ' ', __jsx("span", {
      className: "jsx-543435545"
    }, v.likes.length === 0 ? 0 : v.likes.length === 1 ? "".concat(v.likes[0].user_id, "\uB2D8\uC774 \uC88B\uC544\uD569\uB2C8\uB2E4.") : "".concat(v.likes[0].user_id, "\uB2D8 \uC678 ").concat(v.likes.length - 1, "\uBA85\uC774 \uC88B\uC544\uD569\uB2C8\uB2E4."))), __jsx("div", {
      className: "jsx-543435545"
    }, __jsx("input", {
      type: "text",
      value: reply.i,
      name: i,
      placeholder: "\uB313\uAE00",
      onChange: changeReply,
      className: "jsx-543435545" + " " + "reply_input"
    }), __jsx("input", {
      type: "button",
      value: "\uC785\uB825",
      onClick: function onClick() {
        return inserInput(v, i);
      },
      className: "jsx-543435545" + " " + "reply_btn"
    })), __jsx("div", {
      className: "jsx-543435545"
    }, v.replies.map(function (e, vi) {
      return __jsx("div", {
        key: vi,
        className: "jsx-543435545" + " " + "reply_indi"
      }, __jsx("span", {
        className: "jsx-543435545" + " " + "reply_desc"
      }, "".concat(v.replies[vi].user_id, " : ").concat(v.replies[vi].desc)), __jsx("span", {
        className: "jsx-543435545" + " " + "reply_del"
      }, __jsx("button", {
        type: "button",
        onClick: function onClick() {
          return delReply(v);
        },
        className: "jsx-543435545"
      }, "X")));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "543435545"
  }, ".left_content.jsx-543435545{float:left;width:69%;margin-right:1%;}.main_card.jsx-543435545{margin-bottom:10px;padding:10px;}.reply_input.jsx-543435545{border:1px solid rgba(0,0,0,.125);width:90%;border-radius:5px;padding-left:10px;height:30px;}.reply_btn.jsx-543435545{border:1px solid rgba(0,0,0,.125);width:10%;height:30px;border-radius:5px;}.like.jsx-543435545{margin:5px 0;}.like.jsx-543435545 i.jsx-543435545{color:red;font-weight:700;font-size:13px;cursor:pointer;}.like.jsx-543435545 span.jsx-543435545{font-size:12px;}.reply_indi.jsx-543435545{margin:5px 0 0 0;padding-left:7px;overflow:hidden;}.reply_desc.jsx-543435545{display:block;float:left;}.reply_del.jsx-543435545{float:right;}.reply_del.jsx-543435545 button.jsx-543435545{padding:0px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hTLEFBR3VCLEFBS1EsQUFJZSxBQU9BLEFBTXJCLEFBR0gsQUFNSyxBQUdFLEFBS0gsQUFJRixBQUdJLFVBcEJBLENBekJOLENBMkNYLENBckJBLENBaUJZLENBUlosQ0FlQSxDQVptQixFQTdCTCxFQUpJLElBdUNsQixDQWRnQixNQXBCaEIsRUFHVyxBQU9BLEFBbUJNLEdBakNqQixJQXlCZ0IsR0FqQkcsQUFPTixNQW1CYixNQWxCbUIsQUFVbkIsTUFqQm1CLFlBUW5CLE1BUGEsWUFDYiIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXG1haW5cXENhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXHJcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIEZFVENIX0NBUkRTX1NUQVJULCBMSUtFX0NBUkRfUkVRVUVTVCxcclxuICBVTkxJS0VfQ0FSRF9SRVFVRVNULCBBRERfQ0FSRF9SRVBMWV9SRVFVRVNULCBERUxfQ0FSRF9SRVBMWV9SRVFVRVNUXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvY2FyZFJlZHVjZXInO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2FnYUxvZ2luLCBbXSk7XHJcbiAgY29uc3QgeyBmZXRjaFN0YXRlLCBjYXJkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcmQsIFtdKTtcclxuICBjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVJEU19TVEFSVCwgcGF5bG9hZDogbG9naW4udXNlcm5hbWUgfSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGNhcmQpO1xyXG4gIGNvbnN0IGNsaWNrTGlrZSA9ICh2KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbGlrZScsIGxvZ2luLnVzZXJuYW1lLCB2LmJvYXJkX2lkKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBsb2dpbi51c2VybmFtZSxcclxuICAgICAgYm9hcmRfaWQ6IHYuYm9hcmRfaWQsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBMSUtFX0NBUkRfUkVRVUVTVCwgcGF5bG9hZCB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGNsaWNrVW5MaWtlID0gKHYpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCd1bmxpa2UnLCBsb2dpbi51c2VybmFtZSwgdi5ib2FyZF9pZCk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICB1c2VybmFtZTogbG9naW4udXNlcm5hbWUsXHJcbiAgICAgIGJvYXJkX2lkOiB2LmJvYXJkX2lkLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogVU5MSUtFX0NBUkRfUkVRVUVTVCwgcGF5bG9hZCB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZVJlcGx5ID0gKGUpID0+IHtcclxuICAgIHNldFJlcGx5KHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocmVwbHkpO1xyXG4gIH07XHJcbiAgY29uc3QgaW5zZXJJbnB1dCA9ICh2LCBpKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVwbHknLCBsb2dpbi51c2VybmFtZSwgdi5ib2FyZF9pZCwgcmVwbHlbaV0pO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luLnVzZXJuYW1lLFxyXG4gICAgICBib2FyZF9pZDogdi5ib2FyZF9pZCxcclxuICAgICAgZGVzYzogcmVwbHlbaV0sXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfQ0FSRF9SRVBMWV9SRVFVRVNULCBwYXlsb2FkIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsUmVwbHkgPSAodikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3JlcGx5JywgbG9naW4udXNlcm5hbWUsIHYuYm9hcmRfaWQsIHYucmVwbGllcyk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICB1c2VybmFtZTogbG9naW4udXNlcm5hbWUsXHJcbiAgICAgIGJvYXJkX2lkOiB2LmJvYXJkX2lkLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVMX0NBUkRfUkVQTFlfUkVRVUVTVCwgcGF5bG9hZCB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfY29udGVudFwiPlxyXG4gICAgICAgIHtjYXJkLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1haW5fY2FyZFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3YudXNlcl9pZH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3YuZGVzY31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZVwiPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgodXNlcm5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gdi5saWtlcy5maW5kSW5kZXgoKGUpID0+IGUudXNlcl9pZCA9PT0gdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gY2xpY2tMaWtlKHYpfSAvPjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBjbGlja1VuTGlrZSh2KX0gLz47XHJcbiAgICAgICAgICAgICAgICB9KShsb2dpbi51c2VybmFtZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdi5saWtlcy5sZW5ndGggPT09IDAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2Lmxpa2VzLmxlbmd0aCA9PT0gMSA/IGAke3YubGlrZXNbMF0udXNlcl9pZH3ri5jsnbQg7KKL7JWE7ZWp64uI64ukLmBcclxuICAgICAgICAgICAgICAgICAgICAgIDogYCR7di5saWtlc1swXS51c2VyX2lkfeuLmCDsmbggJHt2Lmxpa2VzLmxlbmd0aCAtIDF966qF7J20IOyii+yVhO2VqeuLiOuLpC5gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJyZXBseV9pbnB1dFwiIHZhbHVlPXtyZXBseS5pfSBuYW1lPXtpfSBwbGFjZWhvbGRlcj1cIuuMk+q4gFwiIG9uQ2hhbmdlPXtjaGFuZ2VSZXBseX0gLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInJlcGx5X2J0blwiIHZhbHVlPVwi7J6F66ClXCIgb25DbGljaz17KCkgPT4gaW5zZXJJbnB1dCh2LCBpKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdi5yZXBsaWVzLm1hcCgoZSwgdmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBseV9pbmRpXCIga2V5PXt2aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVwbHlfZGVzY1wiPntgJHt2LnJlcGxpZXNbdmldLnVzZXJfaWR9IDogJHt2LnJlcGxpZXNbdmldLmRlc2N9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVwbHlfZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkZWxSZXBseSh2KX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5sZWZ0X2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjY5JTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluX2NhcmR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2lucHV0e1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBseV9idG57XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgd2lkdGg6MTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZXtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpa2UgaXtcclxuICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtlIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2luZGl7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMCAwIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfZGVzY3tcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBseV9kZWx7XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2RlbCBidXR0b257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.5e7998342c57d6d89c2b.hot-update.js.map