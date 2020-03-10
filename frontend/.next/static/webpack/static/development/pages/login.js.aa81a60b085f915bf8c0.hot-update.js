webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */





var Login = function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1]; // const loginSubmitForm = (e) => {
  //   e.preventDefault();
  //   console.log(id);
  //   console.log(password);
  // };


  var loginSubmitForm = function loginSubmitForm(e) {
    e.preventDefault(); // eslint-disable-next-line no-alert

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/signin', {
      uid: id,
      upw: password
    }).then(function (response) {
      // console.log(response);
      if (response.data.id === 'admin') {
        props.history.push('/');
      }
    })["catch"](function (err) {
      console.log(err);
      idInput.current.value = '';
      pwInput.current.value = '';
      idInput.current.focus();
    });
  };

  return __jsx("div", {
    className: "jsx-409979760" + " " + "loginForm"
  }, __jsx("h1", {
    className: "jsx-409979760"
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm,
    className: "jsx-409979760"
  }, __jsx("div", {
    className: "jsx-409979760"
  }, __jsx("input", {
    type: "text",
    ref: idInput,
    value: id,
    onChange: function onChange(e) {
      return setId(e.target.value);
    },
    id: "uid",
    className: "jsx-409979760"
  })), __jsx("div", {
    className: "jsx-409979760"
  }, __jsx("input", {
    type: "password",
    ref: pwInput,
    autoComplete: "on",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "jsx-409979760"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    block: true,
    type: "submit"
  }, "\uB85C\uADF8\uC778"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    variant: "warning",
    block: true,
    type: "button"
  }, "KaKao \uB85C\uADF8\uC778")), __jsx("div", {
    className: "jsx-409979760"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-409979760"
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-409979760"
  }, "\uC544\uC774\uB514 \uCC3E\uAE30")), "&", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-409979760"
  }, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "409979760"
  }, ".loginForm.jsx-409979760{width:350px;margin:0 auto;padding:50px 0 150px 0;}h1.jsx-409979760{font-size:30px;font-weight:700;text-align:center;margin:20px 0;}.loginForm.jsx-409979760 input.jsx-409979760{padding:10px;}.loginForm.jsx-409979760 input.jsx-409979760{width:100%;height:50px;margin:5px 0px;border-radius:5px;border:1px solid #BDBDBD;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RFMsQUFHd0IsQUFLRyxBQU1GLEFBR0YsV0FDQyxDQWRHLENBV2hCLEVBTmlCLFFBVUQsR0FkUSxLQUtMLE9BVUMsV0FkcEIsQUFLZSxPQVdoQixPQVZDLGtCQVVBIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0R3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBjb25zdCBsb2dpblN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgY29uc29sZS5sb2coaWQpO1xyXG4gIC8vICAgY29uc29sZS5sb2cocGFzc3dvcmQpO1xyXG4gIC8vIH07XHJcbiAgY29uc3QgbG9naW5TdWJtaXRGb3JtID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgJy9zaWduaW4nLFxyXG4gICAgICB7XHJcbiAgICAgICAgdWlkOiBpZCxcclxuICAgICAgICB1cHc6IHBhc3N3b3JkLFxyXG4gICAgICB9LFxyXG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmlkID09PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgaWRJbnB1dC5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAgIHB3SW5wdXQuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgICBpZElucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Gb3JtXCI+XHJcbiAgICAgIDxoMT7roZzqt7jsnbg8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW5TdWJtaXRGb3JtfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtpZElucHV0fSB2YWx1ZT17aWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpfSBpZD1cInVpZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3B3SW5wdXR9IGF1dG9Db21wbGV0ZT1cIm9uXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGJsb2NrIHR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJ3YXJuaW5nXCIgYmxvY2sgdHlwZT1cImJ1dHRvblwiPkthS2FvIOuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPu2ajOybkOqwgOyehTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPuyVhOydtOuUlCDssL7quLA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICZcclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+67mE67CA67KI7Zi4IOywvuq4sDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubG9naW5Gb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6MzUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjUwcHggMCAxNTBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46MjBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luRm9ybSBpbnB1dHtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luRm9ybSBpbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkRcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\pages\\\\login.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.aa81a60b085f915bf8c0.hot-update.js.map