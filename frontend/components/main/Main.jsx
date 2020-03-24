import React, {
  Fragment, useState, useEffect,
  memo,
} from 'react';
import Profile from '../profile/Profile';
import Card from './Card';

const Main = memo((props) => (
  <Fragment>
    <div id="content">
      <Card />
      <Profile />
    </div>
    <style jsx>
      {`
        #content{
          padding: 10px 0;
          overflow:hidden;
        }
      `}
    </style>
  </Fragment>
));

export default Main;
