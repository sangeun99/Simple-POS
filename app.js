var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

db_config.connect(conn);

/**
 * VIEW 엔진 추가
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/**
 * Middle Ware Setting
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    key: 'sid',
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 5000 * 60 // 쿠키 유효기간 5분
    }
}))

const admin = require('./routes/admin');
const login = require('./routes/login');
const logout = require('./routes/logout');
const menu = require('./routes/menu');

app.get('/', function (req, res) {
    res.send('ROOT');
});

/**
 * Routing
 */
app.use('/admin', admin);
app.use('/login', login);
app.use('/logout', logout);
app.use('/menu', menu);

app.listen(3000, () => console.log('Server is running on port 3000...'));