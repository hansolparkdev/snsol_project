import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_CARDS_START } from '../../redux/reducers/cardReducer';

const Card = () => {
  const login = useSelector((state) => state.sagaLogin, []);
  const { fetchState, card } = useSelector((state) => state.card, []);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch({ type: FETCH_CARDS_START, payload: login.username });
    };
    fetchData();
  }, []);
  // console.log(card);
  const clickLike = (i) => {
    console.log(i);
  };
  return (
    <Fragment>
      <div className="left_content">
        {card.map((v, i) => (
          <div className="card main_card" key={i}>
            <div>
              <span>{v.user_id}</span>
            </div>
            <div>
              <span>{v.title}</span>
            </div>
            <div>
              {v.desc}
            </div>
            <div className="like">
              <i className="fa fa-heart-o" aria-hidden="true" onClick={() => clickLike(i)} />
              {' '}
              <span>{v.likes.length === 0 ? 0 : `${v.likes[0].user_id}님 외 ${v.likes.length - 1}명이 좋아합니다.`}</span>
            </div>
            <div>
              <input type="text" className="reply_input" placeholder="댓글" />
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .left_content{
            float:left;
            width:69%;
            margin-right: 1%;
          }
          .main_card{
            margin-bottom:10px;
            padding:10px;
          }
          .reply_input{
            border:1px solid rgba(0,0,0,.125);
            width:100%;
            border-radius:5px;
            padding-left:10px;
            height:30px;
          }
          .like{
            margin:5px 0;
          }
          .like i{
            color:red;
            font-weight:700;
            font-size:13px;
          }
          .like span{
            font-size:12px;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Card;
