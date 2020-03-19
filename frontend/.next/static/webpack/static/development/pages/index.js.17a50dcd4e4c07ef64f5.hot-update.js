webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/login/login.jsx":
/*!************************************!*\
  !*** ./components/login/login.jsx ***!
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
  var loginStatus = login.loginStatus;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_8__["SESSION_CHECK"]
      });
      console.log(loginStatus);

      if (loginStatus === 'success') {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
      }
    };

    fetchData();
  }, [loginStatus]);
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
  }, loginStatus === 'failed' ? __jsx("div", {
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
  }, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"))))) : __jsx("div", {
    className: "jsx-3979854402"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3979854402"
  }, ".loginForm.jsx-3979854402{width:350px;margin:0 auto;padding:50px 0 150px 0;}.textInputForm.jsx-3979854402{width:100%;}.inputForm.jsx-3979854402{margin:10px 0;}h1.jsx-3979854402{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:30px;font-weight:500;text-align:center;margin:20px 0;}.loginForm.jsx-3979854402 input.jsx-3979854402{padding:10px;}.loginForm.jsx-3979854402 input.jsx-3979854402{width:100%;height:50px;margin:5px 0px;border-radius:5px;border:1px solid #BDBDBD;}.login_etc.jsx-3979854402{margin-top:10px;font-size:12px;}.login_etc.jsx-3979854402 div.jsx-3979854402:first-child{float:left;}.login_etc.jsx-3979854402 div.jsx-3979854402:last-child{float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSFMsQUFHd0IsQUFLRCxBQUdHLEFBR0ssQUFPTixBQUdGLEFBT0ssQUFJTCxBQUdDLFdBN0JiLEFBZ0JhLEFBV2IsQ0FoQ2dCLEFBbUNoQixDQWpCQSxDQVZBLEVBb0JnQixPQU5BLEdBckJRLEtBNEJ4QixPQU5vQixXQXJCcEIsT0F1QkQseUJBQUMsWUFkZ0IsZUFDQyxnQkFDRSxrQkFDSixjQUNmIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFxzbnNvbF9wcm9qZWN0XFxmcm9udGVuZFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cclxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcbiAgU0VUX1VTRVJOQU1FLCBTRVRfUEFTU1dPUkQsXHJcbiAgRE9fTE9HSU4sIFNFU1NJT05fQ0hFQ0ssXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvc2FnYUxvZ2luUmVkdWNlcic7XHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSB3aXRoU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICAnJiBsYWJlbC5NdWktZm9jdXNlZCc6IHtcclxuICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG4gICAgICAnJiBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KShUZXh0RmllbGQpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIG1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhZ2FMb2dpbiwgW10pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGxvZ2luU3RhdHVzIH0gPSBsb2dpbjtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFU1NJT05fQ0hFQ0sgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxvZ2luU3RhdHVzKTtcclxuICAgICAgaWYgKGxvZ2luU3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2xvZ2luU3RhdHVzXSk7XHJcblxyXG4gIGNvbnN0IGlkSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwd0lucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBsb2dpblN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGxvZ2luO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBET19MT0dJTiwgcGF5bG9hZDogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiPlxyXG4gICAgICB7bG9naW5TdGF0dXMgPT09ICdmYWlsZWQnID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+U05TT0wg66Gc6re47J24PC9oMT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpblN1Ym1pdEZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRJbnB1dEZvcm1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Rm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPENzc1RleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxyXG4gICAgICAgICAgICAgICAgICByZWY9e2lkSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIuyVhOydtOuUlOulvCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1VTRVJOQU1FLCBwYXlsb2FkOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxDc3NUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3B3SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VmOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9QQVNTV09SRCwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBibG9jayB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIndhcm5pbmdcIiBibG9jayB0eXBlPVwiYnV0dG9uXCI+S2FLYW8g66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX2V0Y1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+7JWE7J2065SUIOywvuq4sDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgJlxyXG4gICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7ruYTrsIDrsojtmLgg7LC+6riwPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IDxkaXYgLz59XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5sb2dpbkZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDozNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NTBweCAwIDE1MHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dElucHV0Rm9ybXtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dEZvcm17XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOjIwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbkZvcm0gaW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbkZvcm0gaW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQkRCREJEXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5fZXRjIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbl9ldGMgZGl2OmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luX2V0YyBkaXY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\snsol_project\\\\frontend\\\\components\\\\login\\\\login.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/profile/Profile.jsx":
false,

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/login */ "./components/login/login.jsx");
/* harmony import */ var _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/sagaLoginReducer */ "./redux/reducers/sagaLoginReducer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index(props) {
  var login = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.sagaLogin;
  }, []);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var loginStatus = login.loginStatus;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var fetchData = function fetchData() {
      dispatch({
        type: _redux_reducers_sagaLoginReducer__WEBPACK_IMPORTED_MODULE_5__["SESSION_CHECK"]
      });
    };

    fetchData();
  }, [loginStatus]);

  var foo = function foo() {
    console.log('aaa');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loginStatus !== 'failed' && __jsx(_components_login_login__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.17a50dcd4e4c07ef64f5.hot-update.js.map