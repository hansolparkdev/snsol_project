import React, { Fragment } from 'react';

const Index = () => (
  <Fragment>
    <div id="content">
      <div className="left_content">
        <div id="card">
          <div>
            <span>프로필사진</span>
            <span>이름</span>
          </div>
          <div>
            이미지슬라이드
          </div>
          <div>
            <span>좋아요</span>
            <span>댓글</span>
          </div>
        </div>
      </div>
      <div className="right_content">profile</div>
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
          background-color:blue;
          margin-right: 1%;
        }
        .right_content{
          float:left;
          width:30%;
          height:500px;  
          background-color:blue;
        }
        #card{
          color:white;
        }
      `}
    </style>
  </Fragment>
);

export default Index;
