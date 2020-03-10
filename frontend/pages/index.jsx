import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counterReducer';
import { sagaIncrement, sagaDecrement } from '../redux/reducers/sagaCounterReducer';
import { thunkIncrementAsync, thunkDecrementAsync } from '../redux/reducers/thunkCounterReducer';

const Index = () => {
  const { value } = useSelector((state) => state.counter, []);
  const { sagaValue } = useSelector((state) => state.sagaCounter, []);
  const { thunkValue } = useSelector((state) => state.thunkCounter, []);

  const dispatch = useDispatch();
  const incrementBtn = () => {
    dispatch(increment());
  };
  const decrementBtn = () => {
    dispatch(decrement());
  };
  const sagaIncrementBtn = () => {
    dispatch(sagaIncrement());
  };
  const sagaDecrementBtn = () => {
    dispatch(sagaDecrement());
  };
  const thunkIncrementBtn = () => {
    dispatch(thunkIncrementAsync());
  };
  const thunkDecrementBtn = () => {
    dispatch(thunkDecrementAsync());
  };
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
        <div className="right_content">profile</div>
        <div>
          <div>
            기본 리덕스
            <div>{value}</div>
            <button onClick={incrementBtn} type="button">증가</button>
            <button onClick={decrementBtn} type="button">감소</button>
          </div>
        </div>
        <div>
          <div>
            리덕스 사가
            <div>{ sagaValue }</div>
            <button onClick={sagaIncrementBtn} type="button">증가</button>
            <button onClick={sagaDecrementBtn} type="button">감소</button>
          </div>
        </div>
        <div>
          <div>
            리덕스 Thunk
            <div>{ thunkValue }</div>
            <button onClick={thunkIncrementBtn} type="button">증가</button>
            <button onClick={thunkDecrementBtn} type="button">감소</button>
          </div>
        </div>
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
          .right_content{
            float:left;
            width:30%;
            height:500px;  
            background-color:blue;
          }
          .card{
            color:black;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Index;
