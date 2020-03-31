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

  var delReply = function delReply(v, vi) {
    console.log('reply', login.username, v.board_id, v.replies[vi].id);
    var payload = {
      reple_id: v.replies[vi].id,
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
          return delReply(v, vi);
        },
        className: "jsx-543435545"
      }, "X")));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "543435545"
  }, ".left_content.jsx-543435545{float:left;width:69%;margin-right:1%;}.main_card.jsx-543435545{margin-bottom:10px;padding:10px;}.reply_input.jsx-543435545{border:1px solid rgba(0,0,0,.125);width:90%;border-radius:5px;padding-left:10px;height:30px;}.reply_btn.jsx-543435545{border:1px solid rgba(0,0,0,.125);width:10%;height:30px;border-radius:5px;}.like.jsx-543435545{margin:5px 0;}.like.jsx-543435545 i.jsx-543435545{color:red;font-weight:700;font-size:13px;cursor:pointer;}.like.jsx-543435545 span.jsx-543435545{font-size:12px;}.reply_indi.jsx-543435545{margin:5px 0 0 0;padding-left:7px;overflow:hidden;}.reply_desc.jsx-543435545{display:block;float:left;}.reply_del.jsx-543435545{float:right;}.reply_del.jsx-543435545 button.jsx-543435545{padding:0px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbWFpblxcQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUhTLEFBR3VCLEFBS1EsQUFJZSxBQU9BLEFBTXJCLEFBR0gsQUFNSyxBQUdFLEFBS0gsQUFJRixBQUdJLFVBcEJBLENBekJOLENBMkNYLENBckJBLENBaUJZLENBUlosQ0FlQSxDQVptQixFQTdCTCxFQUpJLElBdUNsQixDQWRnQixNQXBCaEIsRUFHVyxBQU9BLEFBbUJNLEdBakNqQixJQXlCZ0IsR0FqQkcsQUFPTixNQW1CYixNQWxCbUIsQUFVbkIsTUFqQm1CLFlBUW5CLE1BUGEsWUFDYiIsImZpbGUiOiJEOlxcRGVza3RvcFxcc25zb2xfcHJvamVjdFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXG1haW5cXENhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXHJcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIEZFVENIX0NBUkRTX1NUQVJULCBMSUtFX0NBUkRfUkVRVUVTVCxcclxuICBVTkxJS0VfQ0FSRF9SRVFVRVNULCBBRERfQ0FSRF9SRVBMWV9SRVFVRVNULCBERUxfQ0FSRF9SRVBMWV9SRVFVRVNULFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2NhcmRSZWR1Y2VyJztcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhZ2FMb2dpbiwgW10pO1xyXG4gIGNvbnN0IHsgZmV0Y2hTdGF0ZSwgY2FyZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJkLCBbXSk7XHJcbiAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FSRFNfU1RBUlQsIHBheWxvYWQ6IGxvZ2luLnVzZXJuYW1lIH0pO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICAvLyBjb25zb2xlLmxvZyhjYXJkKTtcclxuICBjb25zdCBjbGlja0xpa2UgPSAodikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2xpa2UnLCBsb2dpbi51c2VybmFtZSwgdi5ib2FyZF9pZCk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICB1c2VybmFtZTogbG9naW4udXNlcm5hbWUsXHJcbiAgICAgIGJvYXJkX2lkOiB2LmJvYXJkX2lkLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogTElLRV9DQVJEX1JFUVVFU1QsIHBheWxvYWQgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjbGlja1VuTGlrZSA9ICh2KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndW5saWtlJywgbG9naW4udXNlcm5hbWUsIHYuYm9hcmRfaWQpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luLnVzZXJuYW1lLFxyXG4gICAgICBib2FyZF9pZDogdi5ib2FyZF9pZCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFVOTElLRV9DQVJEX1JFUVVFU1QsIHBheWxvYWQgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VSZXBseSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZXBseSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcGx5KTtcclxuICB9O1xyXG4gIGNvbnN0IGluc2VySW5wdXQgPSAodiwgaSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3JlcGx5JywgbG9naW4udXNlcm5hbWUsIHYuYm9hcmRfaWQsIHJlcGx5W2ldKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBsb2dpbi51c2VybmFtZSxcclxuICAgICAgYm9hcmRfaWQ6IHYuYm9hcmRfaWQsXHJcbiAgICAgIGRlc2M6IHJlcGx5W2ldLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX0NBUkRfUkVQTFlfUkVRVUVTVCwgcGF5bG9hZCB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGRlbFJlcGx5ID0gKHYsIHZpKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVwbHknLCBsb2dpbi51c2VybmFtZSwgdi5ib2FyZF9pZCwgdi5yZXBsaWVzW3ZpXS5pZCk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICByZXBsZV9pZDogdi5yZXBsaWVzW3ZpXS5pZCxcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luLnVzZXJuYW1lLFxyXG4gICAgICBib2FyZF9pZDogdi5ib2FyZF9pZCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTF9DQVJEX1JFUExZX1JFUVVFU1QsIHBheWxvYWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2NvbnRlbnRcIj5cclxuICAgICAgICB7Y2FyZC5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYWluX2NhcmRcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2LnVzZXJfaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj57di50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt2LmRlc2N9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHYubGlrZXMuZmluZEluZGV4KChlKSA9PiBlLnVzZXJfaWQgPT09IHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IGNsaWNrTGlrZSh2KX0gLz47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gY2xpY2tVbkxpa2Uodil9IC8+O1xyXG4gICAgICAgICAgICAgICAgfSkobG9naW4udXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHYubGlrZXMubGVuZ3RoID09PSAwID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogdi5saWtlcy5sZW5ndGggPT09IDEgPyBgJHt2Lmxpa2VzWzBdLnVzZXJfaWR964uY7J20IOyii+yVhO2VqeuLiOuLpC5gXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGAke3YubGlrZXNbMF0udXNlcl9pZH3ri5gg7Jm4ICR7di5saWtlcy5sZW5ndGggLSAxfeuqheydtCDsoovslYTtlanri4jri6QuYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicmVwbHlfaW5wdXRcIiB2YWx1ZT17cmVwbHkuaX0gbmFtZT17aX0gcGxhY2Vob2xkZXI9XCLrjJPquIBcIiBvbkNoYW5nZT17Y2hhbmdlUmVwbHl9IC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJyZXBseV9idG5cIiB2YWx1ZT1cIuyeheugpVwiIG9uQ2xpY2s9eygpID0+IGluc2VySW5wdXQodiwgaSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYucmVwbGllcy5tYXAoKGUsIHZpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHlfaW5kaVwiIGtleT17dml9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcGx5X2Rlc2NcIj57YCR7di5yZXBsaWVzW3ZpXS51c2VyX2lkfSA6ICR7di5yZXBsaWVzW3ZpXS5kZXNjfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcGx5X2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGVsUmVwbHkodiwgdmkpfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxlZnRfY29udGVudHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NjklO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW5fY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2J0bntcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgICAgICAgICB3aWR0aDoxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saWtle1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSBpe1xyXG4gICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpa2Ugc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfaW5kaXtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwIDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBseV9kZXNje1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGx5X2RlbHtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwbHlfZGVsIGJ1dHRvbntcclxuICAgICAgICAgICAgcGFkZGluZzowcHggNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\main\\\\Card.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.52351bb9cc6c562a3d2f.hot-update.js.map