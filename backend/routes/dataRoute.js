/* eslint-disable camelcase */
const express = require('express');
const {
  User, Follow, Like, Reply,
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
    attributes: ['board_id', 'title', 'desc', 'user_id'],
    where: {
      [Op.or]: [
        { '$follow.followingId$': userId },
        { user_id: userId },
      ],
    },
    include: [
      { model: Follow, as: 'follow' },
      { model: Like },
      { model: Reply },
    ],
    order: [
      ['createdAt', 'desc'],
    ],
  });
  res.send(result);
});

router.post('/insertLike', async (req, res) => {
  const { boardId, userId } = req.body;
  // console.log(boardId);
  // console.log(userId);
  const newLike = {
    board_id: boardId,
    user_id: userId,
  };
  const result = await Like.create(newLike);
  res.send(result);
});

router.post('/deleteLike', async (req, res) => {
  try {
    const { boardId, userId } = req.body;
    // console.log(boardId);
    // console.log(userId);
    const deleteLike = {
      board_id: boardId,
      user_id: userId,
    };
    const result = await Like.destroy({ where: deleteLike });
    // console.log(result);
    res.send(true);
  } catch (e) {
    res.send('error');
  }
});

router.post('/addReply', async (req, res) => {
  const { boardId, userId, desc } = req.body;
  // console.log(boardId);
  // console.log(userId);
  const newLike = {
    board_id: boardId,
    user_id: userId,
    desc,
  };
  const result = await Reply.create(newLike);
  res.send(result);
});

router.post('/delReply', async (req, res) => {
  try {
    const { reple_id } = req.body;

    const deleteReply = {
      id: reple_id,
    };
    await Reply.destroy({ where: deleteReply });
    res.send(true);
  } catch (e) {
    res.send('error');
  }
});

module.exports = router;
