var express = require('express');
var router = express.Router();
var db_config = require('../config/database.js');
var conn = db_config.init();
var session = require('express-session');

router.get('/', function (req, res) {
    var sql = 'SELECT * FROM menu WHERE menustate = 1';

    conn.query(sql, function (err, rows) {
        if (err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('menu/menu.ejs', {list : rows});
    })
})

router.get('/detail/:menuId', function(req, res) {
    var params = [req.params.menuId];
    var sql = 'SELECT * FROM menu WHERE menustate = 1 and menuid = ?';
    conn.query(sql, params, function (err, rows) {
        if (err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('menu/detail.ejs', {list : rows});
    })
})

router.get('/:typeId', function(req, res) {
    var params = [req.params.typeId];
    var sql = 'SELECT * FROM menu WHERE menustate = 1 and typeId = ?';
    conn.query(sql, params, function (err, rows) {
        if (err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('menu/menu.ejs', {list : rows});
    })
})

router.post('/order/:menuId', function(req, res) {
    var body = req.body;
    if (! req.session.custpn){
        res.send('<script type="text/javascript">alert("로그인 먼저 진행해 주세요."); window.location="/login"; </script>')
    }

    var sql1 = 'SELECT custid FROM customer WHERE phonenum = ?';
    var sql2 = 'INSERT INTO orderlist(custid, menuid, quantity, ordertime) VALUES(?, ?, ?, NOW())';
    conn.query(sql1, req.session.custpn, function (err, result) {
        if (err) console.log('query is not excuted. insert fail...\n' + err);
        else {
            console.log(sql1);
            var params =[result[0].custid, Number(req.params.menuId), Number(body.quantity)];
            conn.query(sql2, params, function (err) {
                if (err) console.log('query is not excuted. insert fail...\n' + err);
                console.log(sql2);
                res.send('<script type="text/javascript">alert("주문이 완료되었습니다."); window.location="/logout"; </script>')
            });
        }
    });
})

module.exports = router;