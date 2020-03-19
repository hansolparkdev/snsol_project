webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/login/Login.jsx":
/*!************************************!*\
  !*** ./components/login/Login.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/anchor-is-valid */








var CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
  root: {
    '& label.Mui-focused': {
      color: 'gray'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#BDBDBD'
      },
      '&:hover fieldset': {
        borderColor: '#BDBDBD'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#BDBDBD'
      }
    }
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(0)
    }
  };
});

var Login = function Login(props) {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var idInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var pwInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var classes = useStyles();

  var loginSubmitForm = function loginSubmitForm(e) {
    var username = login.username,
        password = login.password;
    e.preventDefault();
    dispatch({
      type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__["DO_LOGIN"],
      payload: {
        username: username,
        password: password
      }
    });
  };

  return __jsx("div", {
    className: "jsx-3979854402" + " " + "loginForm"
  }, __jsx("div", {
    className: "jsx-3979854402"
  }, __jsx("h1", {
    className: "jsx-3979854402"
  }, "SNSOL \uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: loginSubmitForm,
    noValidate: true,
    className: "jsx-3979854402" + " " + (classes.root || "")
  }, __jsx("div", {
    className: "jsx-3979854402" + " " + "textInputForm"
  }, __jsx("div", {
    className: "jsx-3979854402" + " " + "inputForm"
  }, __jsx(CssTextField, {
    className: classes.margin,
    ref: idInput,
    fullWidth: true,
    variant: "outlined",
    label: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694.",
    size: "medium",
    onChange: function onChange(e) {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__["SET_USERNAME"],
        payload: e.target.value
      });
    }
  })), __jsx("div", {
    className: "jsx-3979854402" + " " + "inputForm"
  }, __jsx(CssTextField, {
    className: classes.width,
    ref: pwInput,
    fullWidth: true,
    variant: "outlined",
    type: "password",
    autoComplete: "on",
    label: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
    size: "medium",
    onChange: function onChange(e) {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__["SET_PASSWORD"],
        payload: e.target.value
      });
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: "lg",
    block: true,
    type: "submit"
  }, "\uB85C\uADF8\uC778"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: "lg",
    variant: "warning",
    block: true,
    type: "button"
  }, "KaKao \uB85C\uADF8\uC778")), __jsx("div", {
    className: "jsx-3979854402" + " " + "login_etc"
  }, __jsx("div", {
    className: "jsx-3979854402"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-3979854402"
  }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx("div", {
    className: "jsx-3979854402"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-3979854402"
  }, "\uC544\uC774\uB514 \uCC3E\uAE30")), "\xA0 & \xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-3979854402"
  }, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3979854402"
  }, ".loginForm.jsx-3979854402{width:350px;margin:0 auto;padding:50px 0 150px 0;}.textInputForm.jsx-3979854402{width:100%;}.inputForm.jsx-3979854402{margin:10px 0;}h1.jsx-3979854402{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:30px;font-weight:500;text-align:center;margin:20px 0;}.loginForm.jsx-3979854402 input.jsx-3979854402{padding:10px;}.loginForm.jsx-3979854402 input.jsx-3979854402{width:100%;height:50px;margin:5px 0px;border-radius:5px;border:1px solid #BDBDBD;}.login_etc.jsx-3979854402{margin-top:10px;font-size:12px;}.login_etc.jsx-3979854402 div.jsx-3979854402:first-child{float:left;}.login_etc.jsx-3979854402 div.jsx-3979854402:last-child{float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbG9naW5cXExvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSFMsQUFHd0IsQUFLRCxBQUdHLEFBR0ssQUFPTixBQUdGLEFBT0ssQUFJTCxBQUdDLFdBN0JiLEFBZ0JhLEFBV2IsQ0FoQ2dCLEFBbUNoQixDQWpCQSxDQVZBLEVBb0JnQixPQU5BLEdBckJRLEtBNEJ4QixPQU5vQixXQXJCcEIsT0F1QkQseUJBQUMsWUFkZ0IsZUFDQyxnQkFDRSxrQkFDSixjQUNmIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbG9naW5cXExvZ2luLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cclxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcbiAgU0VUX1VTRVJOQU1FLCBTRVRfUEFTU1dPUkQsXHJcbiAgRE9fTE9HSU4sIFNFU1NJT05fQ0hFQ0ssXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvc2FnYUxvZ2luUmVkdWNlcic7XHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSB3aXRoU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICAnJiBsYWJlbC5NdWktZm9jdXNlZCc6IHtcclxuICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG4gICAgICAnJiBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KShUZXh0RmllbGQpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIG1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhZ2FMb2dpbiwgW10pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaWRJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHB3SW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3VibWl0Rm9ybSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERPX0xPR0lOLCBwYXlsb2FkOiB7IHVzZXJuYW1lLCBwYXNzd29yZCB9IH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Gb3JtXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlNOU09MIOuhnOq3uOyduDwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2luU3VibWl0Rm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRJbnB1dEZvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEZvcm1cIj5cclxuICAgICAgICAgICAgICA8Q3NzVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxyXG4gICAgICAgICAgICAgICAgcmVmPXtpZElucHV0fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLslYTsnbTrlJTrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9VU0VSTkFNRSwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Rm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxDc3NUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53aWR0aH1cclxuICAgICAgICAgICAgICAgIHJlZj17cHdJbnB1dH1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlZjshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfUEFTU1dPUkQsIHBheWxvYWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBibG9jayB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJ3YXJuaW5nXCIgYmxvY2sgdHlwZT1cImJ1dHRvblwiPkthS2FvIOuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX2V0Y1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YT7slYTsnbTrlJQg7LC+6riwPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAmXHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPuu5hOuwgOuyiO2YuCDssL7quLA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxvZ2luRm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOjM1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzo1MHB4IDAgMTUwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0SW5wdXRGb3Jte1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlucHV0Rm9ybXtcclxuICAgICAgICAgICAgbWFyZ2luOjEwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzoxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46MjBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luRm9ybSBpbnB1dHtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luRm9ybSBpbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbl9ldGMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luX2V0YyBkaXY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5fZXRjIGRpdjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\login\\\\Login.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=index.js.80d6138426c346b08bb7.hot-update.js.map