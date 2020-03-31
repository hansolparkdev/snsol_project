/*  */
module.exports = (sequelize, DataTypes) => sequelize.define('reply', {
  desc: {
    type: DataTypes.TEXT,
    allowNULL: false,
  },
},
{
  timestamps: true,
});
