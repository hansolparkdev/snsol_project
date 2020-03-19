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

router.get('/follow', async (req, res) => {
  const user = await models.Follow.count({
    where: { followingId: 'user1' },
    // attributes: ['followerId'],
  });
  console.log(user);
});

module.exports = router;
