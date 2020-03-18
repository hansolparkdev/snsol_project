import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Index = (props) => {
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

  const foo = () => {
    console.log('aaa');
  };
  return (
    <Fragment>
      <div id="content">
        <div className="left_content">
          <div className="card">
            <div>
              <span>프로필사진</span>
              <span>이름</span>
            </div>
            <div>
              이미지슬라이드
            </div>
            <div>
              <button onClick={foo} onKeyDown={foo} type="button">
                <span>좋아요</span>
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
              <span>댓글</span>
            </div>
          </div>
        </div>
        <div className="right_content">profile</div>
      </div>
      <style jsx>
        {`
          #content{
            margin: 10px 0;
            overflow:hidden;
          }
          .left_content{
            float:left;
            width:69%;
            margin-right: 1%;
          }
          .right_content{
            float:left;
            width:30%;
            height:500px;  
            background-color:blue;
          }
          .card{
            color:black;
          }
        `}
      </style>
    </Fragment>
  );
};
// Index.getInitialProps = (context) => {
//   console.log(context.store.getState().loginStatus);
//   if (context.store.getState().loginStatus === undefined) {
//     Router.push('/login');
//   }
// };

export default Index;
