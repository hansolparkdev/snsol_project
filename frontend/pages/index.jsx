/* eslint-disable no-nested-ternary */
import React, {
  Fragment, useState,
  useEffect, memo,
} from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/login/Login';
import Main from '../components/main/Main';
import { SESSION_CHECK } from '../redux/reducers/sagaLoginReducer';

const Index = memo((props) => {
  const login = useSelector((state) => state.sagaLogin, []);
  const dispatch = useDispatch();
  const { loginStatus } = login;

  useEffect(() => {
    const fetchData = () => {
      dispatch({ type: SESSION_CHECK });
    };
    fetchData();
  }, [loginStatus]);
  const Render = () => {
    if (loginStatus === 'failed' || loginStatus === 'ongoing' || loginStatus === 'login_failed') {
      return <Login />;
    }
    if (loginStatus === 'success') {
      return <Main />;
    }
    return <img src="../static/img/page_loading.png" width="1100px" alt="" />;
  };
  return (
    <Fragment>
      {Render()}
    </Fragment>
  );
});
Index.getInitialProps = () => {

};
export default Index;
