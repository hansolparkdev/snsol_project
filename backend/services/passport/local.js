const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
// const bcrypt = require('bcrypt');

const db = require('../../models');
// const db = require('../../db/loginDB');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'uid',
        passwordField: 'upw',
      },
      // id,password는 프론트에서 보낸것을받음
      async (id, password, done) => {
        if (id === undefined || password === undefined) {
          return done(null, false, {
            reason: '아이디 혹은 비밀번호 입력이 누락되었습니다.',
          });
        }
        try {
          const user = await db.User.findOne({ where: { user_id: id } });
          // console.log(user);
          if (!user) {
            return done(null, false, {
              reason: '존재하지 않는 사용자 입니다.',
            });
          }
          const result = await password === user.user_password ? 1 : 0;
          // console.log(password);
          // console.log(user.user_password);
          // console.log(result);
          if (result) {
            // result는 현재 true임
            return done(null, user);
          }
          return done(null, false, { reason: '비밀번호가 틀립니다.' }); // else 문.
        } catch (e) {
          console.error(e);
          return done(e);
        }
      },
    ),
  );
};
