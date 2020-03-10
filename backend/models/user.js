/*  */
module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  user_id: {
    type: DataTypes.STRING(20), // VARCHAR
    allowNULL: false,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING(20), // VARCHAR
    allowNULL: false,
  },
  name: {
    type: DataTypes.STRING(20), // VARCHAR
    allowNULL: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNULL: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNULL: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNULL: false,
    defaultValue: DataTypes.NOW,
  },
},
{
  timestamps: false, // ture일 시 시퀄라이저는 createAt, updateAt 컬럼을 추가함.
});
