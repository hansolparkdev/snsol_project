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
            <div>좋아요</div>
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
        `}
      </style>
    </Fragment>
  );
};

export default Card;
