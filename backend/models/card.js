/*  */
module.exports = (sequelize, DataTypes) => sequelize.define('card', {
  board_id: {
    type: DataTypes.INTEGER,
    allowNULL: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING(50), // VARCHAR
    allowNULL: false,
  },
  desc: {
    type: DataTypes.TEXT,
    allowNULL: false,
  },
},
{
  timestamps: true,
});
