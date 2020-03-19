import React, {
  Fragment, useState, useEffect, memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SESSION_CHECK } from '../../redux/reducers/sagaLoginReducer';

const Profile = memo(() => {
  const login = useSelector((state) => state.sagaLogin, []);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [followingId, setFollowingId] = useState(0);
  const [followerId, setFollowerId] = useState(0);
  // useEffect(() => {
  //   dispatch({ type: SESSION_CHECK });
  // }, []);
  // console.log(login);
  return (
    <Fragment>
      <div className="right_content card">
        <p>팔로우</p>
        <p>팔로잉</p>
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
