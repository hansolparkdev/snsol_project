const passport = require('passport');
const db = require('../../models');
const local = require('./local');

module.exports = () => {
  // 서버쪽에 [{id: 3 , cookie: "asdfg"}]
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
      });
      return done(null, user); // req.user
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};
