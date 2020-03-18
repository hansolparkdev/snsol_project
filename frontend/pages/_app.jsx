/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment, useEffect } from 'react';
// import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import moment from 'moment';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../redux/store';

moment.locale('ko');

// class RootApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

//     // Anything returned here can be access by the client
//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps, store } = this.props;
//     return (
//       <Fragment>
//         <Head>
//           <title>Devsol Blog</title>
//         </Head>
//         <Provider store={store}>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </Provider>
//       </Fragment>
//     );
//   }
// }

const RootApp = (props) => {
  const { Component, pageProps, store } = props;
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  });

  return (
    <Fragment>
      <Head>
        <title>Devsol Blog</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
};

RootApp.getInitialProps = async (context) => {
  // console.log(context.Component.getInitialProps);
  // console.log(context.ctx);
  const { Component, ctx } = context;
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  // console.log(pageProps);
  return { pageProps };
};

export default withRedux(() => (store))(RootApp);
// export default RootApp;
