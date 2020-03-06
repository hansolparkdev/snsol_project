const express = require('express');

const app = express();
const config = require('./config');
const { sequelize } = require('./models/index');
const dataRoute = require('./routes/dataRoute');

app.use('/', dataRoute);
sequelize.sync(); // 서버 실행 시 MySQL 연동

const { port } = config;

app.listen(port, () => {
  console.log(`Ready on http://localhost:${port}`);
});
