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
app.use(
  cors({
    origin: true,
    credentials: true, // origin,credentials 두개 트루해줘야 프론트와 쿠키주고받게됨
  }),
);

// 세션 활성화
app.use(
  session({
    secret: '!@#$%^&*',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // https를 쓸때 true
    },
    name: 'hansol',
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
