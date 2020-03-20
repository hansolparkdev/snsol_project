/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import {
  SET_USERNAME, SET_PASSWORD,
  DO_LOGIN, SESSION_CHECK,
} from '../../redux/reducers/sagaLoginReducer';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'gray',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#BDBDBD',
      },
      '&:hover fieldset': {
        borderColor: '#BDBDBD',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#BDBDBD',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0),
  },
}));

const Login = memo((props) => {
  const login = useSelector((state) => state.sagaLogin, []);
  const { username, password } = login;
  const dispatch = useDispatch();

  const idInput = useRef();
  const pwInput = useRef();
  const classes = useStyles();
  useEffect(() => {
    const data = () => {
      if (login.loginStatus === 'login_failed') {
        idInput.current.value = '';
        pwInput.current.value = '';
        idInput.current.focus();
      }
    };
    data();
  }, [login]);
  const loginSubmitForm = (e) => {
    e.preventDefault();
    dispatch({ type: DO_LOGIN, payload: { username, password } });
  };
  return (
    <div className="loginForm">
      <div>
        <h1>SNSOL 로그인</h1>
        <form onSubmit={loginSubmitForm} className={classes.root} noValidate>
          <div className="textInputForm">
            <div className="inputForm">
              <CssTextField
                className={classes.margin}
                inputRef={idInput}
                fullWidth
                variant="outlined"
                label="아이디를 입력하세요."
                size="medium"
                onChange={(e) => {
                  dispatch({ type: SET_USERNAME, payload: e.target.value });
                }}
              />
            </div>
            <div className="inputForm">
              <CssTextField
                className={classes.width}
                inputRef={pwInput}
                fullWidth
                variant="outlined"
                type="password"
                autoComplete="on"
                label="비밀번호를 입력하세요"
                size="medium"
                onChange={(e) => {
                  dispatch({ type: SET_PASSWORD, payload: e.target.value });
                }}
              />
            </div>
          </div>
          <Button size="lg" block type="submit">로그인</Button>
          <Button size="lg" variant="warning" block type="button">KaKao 로그인</Button>
        </form>
        <div className="login_etc">
          <div>
            <Link href="/">
              <a>회원가입</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>아이디 찾기</a>
            </Link>
            &nbsp;
            &
            &nbsp;
            <Link href="/">
              <a>비밀번호 찾기</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .loginForm {
            width:350px;
            margin: 0 auto;
            padding:50px 0 150px 0;
          }
          .textInputForm{
            width:100%;
          }
          .inputForm{
            margin:10px 0;
          }
          h1{
            letter-spacing:1px;
            font-size:30px;
            font-weight:500;
            text-align:center;
            margin:20px 0;
          }
          .loginForm input{
            padding:10px;
          }
          .loginForm input{
            width:100%;
            height:50px;
            margin:5px 0px;
            border-radius: 5px;
            border: 1px solid #BDBDBD
          }
          .login_etc {
            margin-top:10px;
            font-size:12px;
          }
          .login_etc div:first-child{
            float:left;
          }
          .login_etc div:last-child{
            float:right;
          }
        `}
      </style>
    </div>
  );
});

export default Login;
