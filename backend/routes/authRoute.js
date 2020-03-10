const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const models = require('../models');

const jsonParser = bodyParser.json();

const router = express.Router();

// router.post('/signin', [jsonParser, passport.authenticate('local')], (req, res) => {
//   res.send(req.user);
// });
router.post('/signin', [jsonParser], (req, res) => {
  console.log(req.body);
});


module.exports = router;
