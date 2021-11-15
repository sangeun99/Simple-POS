var express = require('express');
var router = express.Router();
var db_config = require('../config/database.js');
var conn = db_config.init();
var session = require('express-session');

router.get('/', function (req, res) {
    res.render('login.ejs');
});

router.post('/register', function(req, res) {
    var body = req.body;
    console.log(body);

    var sql1 = 'SELECT custid, count(*) as count FROM customer WHERE phonenum = ?';
    var sql2 = 'INSERT INTO customer(phonenum, firstvisit) VALUES(?, NOW())';
    var pn = '010-' + String(body.phone1) + '-' + String(body.phone2);
    var param = [pn];

    conn.query(sql1, param, function(err, result) {
        if(err) console.log('query is not excuted. select fail... \n' + err);
        else {
            if(result[0].count){
                console.log('The phonenum exists...');
            }
            else {
                conn.query(sql2, param, function(err) {
                    if(err) console.log('query is not excuted. insert fail... \n' + err);                    
                });                
            }
            req.session.custpn = pn;
            res.redirect('/menu');
        }
    });
});

module.exports = router;