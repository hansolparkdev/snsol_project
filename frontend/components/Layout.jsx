import React, { Fragment, memo } from 'react';
import head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = memo((props) => {
  const { children } = props;
  return (
    <Fragment>
      <div id="wrap">
        <Header />
        <div className="content">
          <div className="container">
            { children }
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          .content {
            background-color:#fafafa;
          }
        `}
      </style>
    </Fragment>
  );
});

export default Layout;
