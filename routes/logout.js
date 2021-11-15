var express = require('express');
var router = express.Router();
var db_config = require('../config/database.js');
var conn = db_config.init();


router.get('/', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;