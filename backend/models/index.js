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

db.User.hasMany(db.card, { foreignKey: 'uid', sourceKey: 'user_id' });
db.card.belongsTo(db.User, { foreignKey: 'uid', targetKey: 'user_id' });
// db.User = require('./user')(sequelize, Sequelize)

module.exports = db;
