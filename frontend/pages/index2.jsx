import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../components/profile/Profile';
import { SESSION_CHECK } from '../redux/reducers/sagaLoginReducer';

const Index = (props) => {
  const login = useSelector((state) => state.sagaLogin, []);
  const dispatch = useDispatch();
  const { loginStatus } = login;

  useEffect(() => {
    const fetchData = () => {
      dispatch({ type: SESSION_CHECK });
      if (loginStatus === 'success') {
        Router.push('/');
      } else {
        Router.push('/login');
      }
    };
    fetchData();
  }, [loginStatus]);
  const foo = () => {
    console.log('aaa');
  };
  return (
    <Fragment>
      {loginStatus !== 'failed' && (
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
          <Profile />
        </div>
      )}
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
