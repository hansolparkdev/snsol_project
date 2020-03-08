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
db.card = require('./card')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'uid' });
db.User.hasMany(db.card, { foreignKey: 'uid', sourceKey: 'uid' });
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'uid' });
db.card.belongsTo(db.User, { foreignKey: 'uid', targetKey: 'uid' });
// db.User = require('./user')(sequelize, Sequelize)

module.exports = db;
