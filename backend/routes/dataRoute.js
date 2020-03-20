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
  const { userId } = req.query;
  const following = await models.Follow.count({
    where: { followingId: userId },
    // attributes: ['followerId'],
  });
  const follower = await models.Follow.count({
    where: { followerId: userId },
    // attributes: ['followerId'],
  });
  // console.log(follower);
  // console.log(following);
  res.send({ following, follower });
});

module.exports = router;
