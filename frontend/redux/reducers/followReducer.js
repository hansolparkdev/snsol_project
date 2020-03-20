// 액션 선언
export const FETCH_FOLLOW_COUNT_VALUE_STATED = 'FETCH_FOLLOW_COUNT_VALUE_STATED';
// export const FETCH_FOLLOW_COUNT_VALUE_SUCCESS = 'FETCH_FOLLOW_COUNT_VALUE_STATED';
// export const FETCH_FOLLOW_COUNT_VALUE_FAIL = 'FETCH_FOLLOW_COUNT_VALUE_STATED';

// 사가 액션 선언
export const FETCH_FOLLOW_COUNT_VALUE = 'FETCH_FOLLOW_COUNT_VALUE';
// 초기 값
export const initialState = {
  following: 0,
  follower: 0,
  followingList: [],
  followerList: [],
};
// 액션
const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOW_COUNT_VALUE_STATED: {
      const { following, follower } = action.payload;
      return { ...state, following, follower };
    }
    default: {
      return { ...state };
    }
  }
};

export default followReducer;
