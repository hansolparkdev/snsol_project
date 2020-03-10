const express = require('express');
const path = require('path');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const config = require('./config');
const { sequelize } = require('./models');
const passportConfig = require('./services/passport');

const dataRoute = require('./routes/dataRoute');
const authRoute = require('./routes/authRoute');

const app = express();

// 서버 실행 시 MySQL 연동
sequelize.sync();
passportConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// 세션 활성화
app.use(
  session({
    secret: '!@#$%^&*',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', dataRoute);
app.use('/auth', authRoute);

const { port } = config;

app.listen(port, () => {
  console.log(`Ready on http://localhost:${port}`);
});
