import React, {
  Fragment, useState, useEffect, memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_FOLLOW_COUNT_VALUE } from '../../redux/reducers/followReducer';

const Profile = memo(() => {
  const login = useSelector((state) => state.sagaLogin, []);
  const { following, follower } = useSelector((state) => state.follow, []);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(follow)
    const fetchData = async () => {
      dispatch({ type: FETCH_FOLLOW_COUNT_VALUE, payload: login.username });
    };
    console.log(following);
    console.log(follower);
    fetchData();
  }, [following, follower]);

  return (
    <Fragment>
      <div className="right_content card">
        <p>팔로우</p>
        <p>{following}</p>
        <p>팔로잉</p>
        <p>{follower}</p>
      </div>
      <style jsx>
        {`
          .right_content{
            float:left;
            width:30%;
            height:500px;
            background-color:white;
          }
        `}
      </style>
    </Fragment>
  );
});

export default Profile;
