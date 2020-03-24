/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Link from 'next/link';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const Header = (props) => {
  // console.log(Button);
  const onClick = () => {
    alert('button Click');
  };
  return (
    <Fragment>
      <div id="header">
        <div className="container">
          <div className="logo">
            <Link href="/">
              <span>DS</span>
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link href="/login">
                  <a>main</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>main</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>main</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          #header {
            border-bottom:1px solid #ced4da;
          }
          .container{
            overflow:hidden;
          }
          .logo{
            float:left;
            width:120px;
            color:white;
            margin-right:50px;
          }
          .logo span{
            line-height:55px;
            background-color:black;
            padding:10px;
            font-size:20px;
            font-weight:700;
            cursor:pointer;
          }
          .search{
            position:relative;
            top:8px;
            float:left;
            width:400px;
            margin-right:50px;
          }
          .menu{
            float:right;
          }
          .menu ul{ line-height:55px;}
          .menu li{ display: inline; margin-left:50px;}
        `}
      </style>
    </Fragment>
  );
};

export default Header;
