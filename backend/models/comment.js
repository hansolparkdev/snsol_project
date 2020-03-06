module.exports = (sequelize, DataTypes) => sequelize.define('comment', {
  comment: {
    type: DataTypes.TEXT,
    allowNULL: true,
  },
}, {
  timestamps: false, // ture일 시 시퀄라이저는 createAt, updateAt 컬럼을 추가함.
});
