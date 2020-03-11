/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import axios from 'axios';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { thunkIncrementAsync } from '../redux/reducers/loginReducer';


const Login = (props) => {
  const login = useSelector((state) => state.login, []);
  useEffect(() => {
    console.log(login);
  }, [login]);
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const idInput = useRef();
  const pwInput = useRef();

  const loginSubmitForm = (e) => {
    e.preventDefault();
    dispatch(thunkIncrementAsync(id, password));
  };
  return (
    <div className="loginForm">
      <h1>로그인</h1>
      <form onSubmit={loginSubmitForm}>
        <div>
          <input type="text" ref={idInput} value={id} onChange={(e) => setId(e.target.value)} id="uid" />
        </div>
        <div>
          <input type="password" ref={pwInput} autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button size="lg" block type="submit">로그인</Button>
        <Button size="lg" variant="warning" block type="button">KaKao 로그인</Button>
      </form>
      <div>
        <Link href="/">
          <a>회원가입</a>
        </Link>
        <Link href="/">
          <a>아이디 찾기</a>
        </Link>
        &
        <Link href="/">
          <a>비밀번호 찾기</a>
        </Link>
      </div>
      <style jsx>
        {`
          .loginForm {
            width:350px;
            margin: 0 auto;
            padding:50px 0 150px 0;
          }
          h1{
            font-size:30px;
            font-weight:700;
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
        `}
      </style>
    </div>
  );
};

export default Login;
