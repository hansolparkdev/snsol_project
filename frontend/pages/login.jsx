/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const loginSubmitForm = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(password);
  };
  return (
    <div className="loginForm">
      <h1>로그인</h1>
      <form onSubmit={loginSubmitForm}>
        <div>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} id="uid" />
        </div>
        <div>
          <input type="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">전송</button>
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
            border-top:1px solid #BDBDBD;
            border-left:1px solid #BDBDBD;
            border-right:1px solid #BDBDBD;
            border-bottom:0;
            padding:10px;
          }
          .loginForm input, .loginForm button{
            width:100%;
            height:50px;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
