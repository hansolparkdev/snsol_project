import React, {
  Fragment, useState, useEffect,
  memo,
} from 'react';
import Profile from '../profile/Profile';

const Main = memo((props) => {
  const foo = () => {
    console.log('aaa');
  };
  return (
    <Fragment>
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
});

export default Main;
