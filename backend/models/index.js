const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};
console.log(config);
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Card = require('./card')(sequelize, Sequelize);
db.Follow = require('./follow')(sequelize, Sequelize);
db.Like = require('./like')(sequelize, Sequelize);
db.Reply = require('./reply')(sequelize, Sequelize);


// 팔로우 연결
db.User.belongsToMany(db.User, {
  foreignKey: 'followingId',
  sourceKey: 'user_id',
  as: 'Followers',
  through: db.Follow,
});

db.User.belongsToMany(db.User, {
  foreignKey: 'followerId',
  sourceKey: 'user_id',
  as: 'Followings',
  through: db.Follow,
});

// 게시물 연결
db.User.hasMany(db.Card, { foreignKey: 'user_id', sourceKey: 'user_id' });
db.Card.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });

db.Follow.hasMany(db.Card, { foreignKey: 'user_id', sourceKey: 'followerId' });
db.Card.belongsTo(db.Follow, { foreignKey: 'user_id', targetKey: 'followerId' });

// like 연결
db.User.hasMany(db.Like, { foreignKey: 'user_id', sourceKey: 'user_id' });
db.Like.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });

db.Card.hasMany(db.Like, { foreignKey: 'board_id', sourceKey: 'board_id' });
db.Like.belongsTo(db.Card, { foreignKey: 'board_id', targetKey: 'board_id' });

// 리플 연결
db.User.hasMany(db.Reply, { foreignKey: 'user_id', sourceKey: 'user_id' });
db.Reply.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });

db.Card.hasMany(db.Reply, { foreignKey: 'board_id', sourceKey: 'board_id' });
db.Reply.belongsTo(db.Card, { foreignKey: 'board_id', targetKey: 'board_id' });

// db.User = require('./user')(sequelize, Sequelize)

module.exports = db;
