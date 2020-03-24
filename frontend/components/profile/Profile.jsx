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
    fetchData();
  }, [following, follower]);

  return (
    <Fragment>
      <div className="right_content">
        <div className="p_top">
          <p className="p_name">
            {`${login.name} (${login.username})`}
          </p>
          <button type="button">LogOut</button>
        </div>
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Follower</th>
                <th>Following</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{follower}</td>
                <td>{following}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>
        {`
          .right_content{
            float:left;
            width:30%;
          }
          .p_top{
            overflow:hidden;
            padding:0 0 10px 0;
            height:50px;
          }
          .p_top p{
            float:left;
            line-height:50px;
          }
          .p_top button{
            float:right;
            width:30%;
            height:30px;
            margin-top:10px;
          }
          .p_name{
            font-size:15px;
          }
          table{
            text-align:center;
            margin:10px 0;
          }
          table th, table td{
            height:30px;
          }
        `}
      </style>
    </Fragment>
  );
});

export default Profile;
