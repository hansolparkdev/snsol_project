const express = require('express');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const passportConfig = require('./services/passport.js');
const config = require('./config');
const { sequelize } = require('./models/index');
const dataRoute = require('./routes/dataRoute');
const authRoute = require('./routes/authRoute');

const app = express();
app.use(cors());
// 세션 활성화
app.use(session({
  secret: '!@#$%^&*',
  resave: true,
  saveUninitialized: false,
}));

// passport 구동 및 세션 연결
app.use(passport.initialize());
app.use(passport.session());

passportConfig();

app.use('/', dataRoute);
app.use('/auth', authRoute);

sequelize.sync(); // 서버 실행 시 MySQL 연동

const { port } = config;

app.listen(port, () => {
  console.log(`Ready on http://localhost:${port}`);
});
