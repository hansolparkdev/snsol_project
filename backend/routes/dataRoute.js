const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/user', (req, res) => {
  models.User.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
