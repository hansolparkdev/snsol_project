/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const models = require('../models');
const db = require('../db/loginDB');

const jsonParser = bodyParser.json();
const router = express.Router();

// router.post('/signin', [jsonParser, passport.authenticate('local')], (req, res) => {
//   res.send(req.user);
// });
// const ensureAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) { // 현재 session이 유효한 세션인가?
//     // 유효 하므로 다음으로
//     return next();
//   }
// };

router.post('/signin', [jsonParser], (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      console.log(info.reason);
      return res.status(401).send(info.reason);
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      const filteredUser = { ...user.toJSON() };
      delete filteredUser.password;

      return res.json(filteredUser);
    });
  })(req, res, next);
});
router.get('/session_check', (req, res) => {
  // console.log(req.user);
  if (req.user === undefined) {
    const user = { user: '' };
    res.json({ session_data: user });
    return;
  }
  res.json({ session_data: { user: req.user } });
});


module.exports = router;
