/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Link from 'next/link';

const Footer = (props) => (
  <Fragment>
    <div id="footer">
      <div className="container">
        <h2 className="ir_su">반응형 사이트 푸터</h2>
        <div className="footer">
          <ul>
            <li><a href="#">사이트 도움말</a></li>
            <li><a href="#">사이트 이용약관</a></li>
            <li><a href="#">사이트 운영원칙</a></li>
            <li><a href="#"><strong>개인정보취급방침</strong></a></li>
            <li><a href="#">사이트 책임의 한계와 법적고지</a></li>
            <li><a href="#">사이트 게시중단요청서비스</a></li>
            <li><a href="#">사이트 고객센터</a></li>
          </ul>
          <address>
            Copyright ⓒ
            <a href="https://sollife.tistory.com"><strong>https://sollife.tistory.com</strong></a>
            All Rights Reserved.
          </address>
        </div>
      </div>
    </div>
    <style jsx>
      {`
      #footer {border-top:1px solid #ced4da;clear:both}
      .footer {text-align: center;padding:20px 50px;}
      .footer li {position:relative; display: inline;padding:0 7px 0 10px; white-space: nowrap;}
      .footer li:first-child::before{width: 0;}
      .footer li::before{content:''; width: 1px;height: 12px;background: #dbdbdb;
          position: absolute; left: 0;top: 2px;
      }
      .footer address { margin-top: 20px;}
      `}
    </style>
  </Fragment>
);

export default Footer;
