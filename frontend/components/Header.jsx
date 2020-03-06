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
            <span>DS</span>
          </div>
          <div className="search">
            <InputGroup className="mb-3" id="header_search_input">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="hello"
              />
              <Button onClick={onClick}>
                <i className="fa fa-search" aria-hidden="false" />
              </Button>
            </InputGroup>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link href="/">
                  <a>Index</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Login</a>
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
