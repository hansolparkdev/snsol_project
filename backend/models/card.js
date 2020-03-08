/*  */
module.exports = (sequelize, DataTypes) => sequelize.define('card', {
  title: {
    type: DataTypes.STRING(50), // VARCHAR
    allowNULL: false,
    unique: true,
  },
  desc: {
    type: DataTypes.TEXT,
    allowNULL: false,
  },
},
{
  timestamps: true,
});
