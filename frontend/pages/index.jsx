/* eslint-disable no-nested-ternary */
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/login/Login';
import Main from '../components/main/Main';
import { SESSION_CHECK } from '../redux/reducers/sagaLoginReducer';

const Index = (props) => {
  const login = useSelector((state) => state.sagaLogin, []);
  const dispatch = useDispatch();
  const { loginStatus } = login;

  useEffect(() => {
    const fetchData = () => {
      dispatch({ type: SESSION_CHECK });
    };
    fetchData();
  }, [loginStatus]);
  const foo = () => {
    console.log('aaa');
  };
  return (
    <Fragment>
      {loginStatus === undefined || loginStatus === 'ongoing'
        ? (
          <div>
            <img src="../static/img/page_loading.png" width="1100px" alt="" />
          </div>
        )
        : loginStatus !== 'failed' ? <Main /> : <Login /> }
    </Fragment>
  );
};
Index.getInitialProps = () => {

};
export default Index;
