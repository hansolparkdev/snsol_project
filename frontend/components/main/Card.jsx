/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_CARDS_START, LIKE_CARD_REQUEST,
  UNLIKE_CARD_REQUEST, ADD_CARD_REPLY_REQUEST, DEL_CARD_REPLY_REQUEST,
} from '../../redux/reducers/cardReducer';

const Card = () => {
  const login = useSelector((state) => state.sagaLogin, []);
  const { fetchState, card } = useSelector((state) => state.card, []);
  const [reply, setReply] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch({ type: FETCH_CARDS_START, payload: login.username });
    };
    fetchData();
  }, []);
  // console.log(card);
  const clickLike = (v) => {
    console.log('like', login.username, v.board_id);
    const payload = {
      username: login.username,
      board_id: v.board_id,
    };
    dispatch({ type: LIKE_CARD_REQUEST, payload });
  };
  const clickUnLike = (v) => {
    console.log('unlike', login.username, v.board_id);
    const payload = {
      username: login.username,
      board_id: v.board_id,
    };
    dispatch({ type: UNLIKE_CARD_REQUEST, payload });
  };
  const changeReply = (e) => {
    setReply({
      [e.target.name]: e.target.value,
    });
    console.log(reply);
  };
  const inserInput = (v, i) => {
    console.log('reply', login.username, v.board_id, reply[i]);
    const payload = {
      username: login.username,
      board_id: v.board_id,
      desc: reply[i],
    };
    dispatch({ type: ADD_CARD_REPLY_REQUEST, payload });
  };
  const delReply = (v, vi) => {
    console.log('reply', login.username, v.board_id, v.replies[vi].id);
    const payload = {
      reple_id: v.replies[vi].id,
      username: login.username,
      board_id: v.board_id,
    };
    dispatch({ type: DEL_CARD_REPLY_REQUEST, payload });
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
              {
                ((username) => {
                  const filter = v.likes.findIndex((e) => e.user_id === username);
                  if (filter === -1) {
                    return <i className="fa fa-heart-o" aria-hidden="true" onClick={() => clickLike(v)} />;
                  }
                  return <i className="fa fa-heart" aria-hidden="true" onClick={() => clickUnLike(v)} />;
                })(login.username)
              }
              {' '}
              <span>
                {
                  v.likes.length === 0 ? 0
                    : v.likes.length === 1 ? `${v.likes[0].user_id}님이 좋아합니다.`
                      : `${v.likes[0].user_id}님 외 ${v.likes.length - 1}명이 좋아합니다.`
                }
              </span>
            </div>
            <div>
              <input type="text" className="reply_input" value={reply.i} name={i} placeholder="댓글" onChange={changeReply} />
              <input type="button" className="reply_btn" value="입력" onClick={() => inserInput(v, i)} />
            </div>
            <div>
              {
                v.replies.map((e, vi) => (
                  <div className="reply_indi" key={vi}>
                    <span className="reply_desc">{`${v.replies[vi].user_id} : ${v.replies[vi].desc}`}</span>
                    <span className="reply_del">
                      <button type="button" onClick={() => delReply(v, vi)}>X</button>
                    </span>
                  </div>
                ))
              }
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
            width:90%;
            border-radius:5px;
            padding-left:10px;
            height:30px;
          }
          .reply_btn{
            border:1px solid rgba(0,0,0,.125);
            width:10%;
            height:30px;
            border-radius:5px;
          }
          .like{
            margin:5px 0;
          }
          .like i{
            color:red;
            font-weight:700;
            font-size:13px;
            cursor:pointer;
          }
          .like span{
            font-size:12px;
          }
          .reply_indi{
            margin:5px 0 0 0;
            padding-left: 7px;
            overflow:hidden;
          }
          .reply_desc{
            display:block;
            float:left;
          }
          .reply_del{
            float:right;
          }
          .reply_del button{
            padding:0px 5px;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Card;
