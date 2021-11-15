var express = require('express');
var router = express.Router();
var db_config = require('../config/database.js');
var conn = db_config.init();

router.get('/', function(req, res) {
    res.render('admin/admin.ejs');
})

router.get('/now/:state', function(req, res) {
    var sql = 'SELECT O.custid, O.menuid, M.menuname, O.quantity, date_format(O.ordertime, \'%m/%d %H:%i:%s\') as ot FROM orderlist as O JOIN menu as M ON O.menuid = M.menuid WHERE orderstate = ? ORDER BY ordertime DESC';
    conn.query(sql, [req.params.state], function (err, rows) {
        if (err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('admin/now.ejs', {list : rows});
    })
})

router.post('/now/:custId/:menuId', function(req, res) {
    var sql = 'UPDATE orderlist SET orderstate = 1 WHERE custid = ? and menuid = ? and orderstate = 0';
    var params = [Number(req.params.custId), Number(req.params.menuId)];
    conn.query(sql, params, function (err) {
        if (err) console.log('query is not excuted. update fail...\n' + err);
        // 사용자에게 문자가 가도록
        else res.redirect('/admin/now/0');
    })
})

router.get('/sales', function(req, res) {
    var sql1 = 'select O.custid, M.menuname, M.price, O.quantity, M.price * O.quantity as totalprice, date_format(O.ordertime, \'%m/%d %H:%i:%s\') as ot from orderlist O join menu M on O.menuid = M.menuid where curdate() = date_format(O.ordertime, \'%y-%m-%d\') order by ordertime desc;';
    var sql2 = 'select O.custid, M.menuname, M.price, O.quantity, M.price * O.quantity as totalprice, date_format(O.ordertime, \'%m/%d %H:%i:%s\') as ot from orderlist O join menu M on O.menuid = M.menuid order by ordertime desc;';
    var sql3 = 'select SUM(M.price * O.quantity) as totalsales, date_format(O.ordertime, \'%y-%m-%d\') as dates from orderlist O join menu M on O.menuid = M.menuid group by date_format(O.ordertime, \'%y-%m-%d\') order by ordertime desc;';

    conn.query (sql1 + sql2 + sql3, function(err, results) {
        if (err) console.log('query is not excuted. select fail...\n' + err);
        else {
            res.render('admin/sales.ejs', {list : results});
        }
    })
})

router.get('/menu', function(req, res) {
    var sql = 'SELECT * FROM menu m JOIN menutype t ON m.typeid = t.typeid';
    conn.query(sql, function (err, rows) {
        if (err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('admin/menu.ejs', {list : rows});
    })
})

router.get('/menu/edit/:menuId', function(req, res) {
    var sql = 'SELECT * FROM menu WHERE menuid = ?';
    var params = [req.params.menuId];
    conn.query(sql, params, function (err, rows) {
        if (err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('admin/edit.ejs', {list : rows});
    })     
})

router.post('/menu/editing/:menuId', function(req, res) {
    var body = req.body;
    console.log(body);
    var params = [body.Typeid, body.menuName, body.Price, body.menuState, body.Image, req.params.menuId];
    var sql = 'UPDATE menu SET typeid = ?, menuname = ?, price = ?, menustate = ?, imageurl = ? WHERE menuid = ?'

    conn.query(sql, params, function (err) {
        if (err) console.log('query is not excuted. update fail...\n' + err);
        else {
            console.log(sql);
            res.send('<script type="text/javascript">alert("메뉴 수정이 완료되었습니다."); window.location="/admin/menu"; </script>')
        }
    })   
})

router.get('/menu/create', function(req, res) {
    res.render('admin/create.ejs');
})

router.post('/menu/creating', function(req, res) {
    var body = req.body;
    console.log(body);
    var params = [Number(body.typeId), body.menuName, Number(body.Price), Number(body.menuState), body.Image];
    var sql = 'INSERT INTO menu(typeid, menuname, price, menustate, imageurl, firstmade) VALUES(?, ?, ?, ?, ?, NOW())';

    conn.query(sql, params, function (err) {
        if (err) console.log('query is not excuted. insert fail...\n' + err);
        else {
            console.log(sql);
            res.send('<script type="text/javascript">alert("메뉴 추가가 완료되었습니다."); window.location="/admin/menu"; </script>')
        }
    })   
})

module.exports = router;