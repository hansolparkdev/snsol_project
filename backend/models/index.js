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

// 게시물 연결
db.User.hasMany(db.Card, { foreignKey: 'user_id', sourceKey: 'user_id' });
db.Card.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });

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


// like 연결
// db.User = require('./user')(sequelize, Sequelize)

module.exports = db;
