const express = require('express');
const {
  User, Follow, Like,
  Card, Sequelize: { Op }, sequelize,
} = require('../models');

const router = express.Router();

router.get('/user', (req, res) => {
  User.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/follow', async (req, res) => {
  const { userId } = req.query;
  const follower = await Follow.count({
    where: { followingId: userId },
    // attributes: ['followerId'],
  });
  const following = await Follow.count({
    where: { followerId: userId },
    // attributes: ['followerId'],
  });
  // console.log(follower);
  // console.log(following);
  res.send({ follower, following });
});

router.get('/cards', async (req, res) => {
  const { userId } = req.query;
  const result = await Card.findAll({
    attributes: ['title', 'desc', 'user_id'],
    where: {
      [Op.or]: [
        { '$follow.followingId$': userId },
        { user_id: userId },
      ],
    },
    include: [
      { model: Follow, as: 'follow' },
      { model: Like },
    ],
    order: [
      ['createdAt', 'desc'],
    ],
  });
  res.send(result);
});

module.exports = router;
