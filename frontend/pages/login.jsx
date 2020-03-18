/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { SET_USERNAME, SET_PASSWORD, DO_LOGIN } from '../redux/reducers/sagaLoginReducer';

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

const Login = (props) => {
  const login = useSelector((state) => state.sagaLogin, []);
  const { loginStatus } = login;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://127.0.0.1:3001/auth/session_check', {
        withCredentials: true, // 쿠키를 주고받을 수 있게됨
      });
      console.log(result.data.session_data);
    };
    fetchData();
  }, [loginStatus]);

  const dispatch = useDispatch();

  const idInput = useRef();
  const pwInput = useRef();
  const classes = useStyles();

  const loginSubmitForm = (e) => {
    const { username, password } = login;
    e.preventDefault();
    dispatch({ type: DO_LOGIN, payload: { username, password } });
  };
  return (
    <div className="loginForm">
      <h1>SNSOL 로그인</h1>
      <form onSubmit={loginSubmitForm} className={classes.root} noValidate>
        <div className="textInputForm">
          <div className="inputForm">
            <CssTextField
              className={classes.margin}
              ref={idInput}
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
              ref={pwInput}
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
};

export default Login;
