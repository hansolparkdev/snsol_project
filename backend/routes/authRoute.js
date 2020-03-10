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


module.exports = router;
