import React, { Fragment } from 'react';
import head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <div id="wrap">
        <Header />
        <div className="container">
          { children }
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
