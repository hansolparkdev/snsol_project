const passport = require('passport');
const db = require('../../models');
const local = require('./local');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  // 서버쪽에 [{id: 3 , cookie: "asdfg"}]
  // passport.serializeUser((user, done) => {
  //   console.log(user.user_id);
  //   return done(null, user.user_id);
  // });

  // passport.deserializeUser(async (user, done) => done(null, user));
  // // try {
  // //   console.log(id);
  // //   const user = await db.User.findOne({
  // //     where: { user_id: id },
  // //   });
  // //   return done(null, user); // req.user
  // // } catch (e) {
  // //   console.error(e);
  // //   return done(e);
  // // }

  local();
};
