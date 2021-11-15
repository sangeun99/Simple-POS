var mysql = require('mysql');
var db_info = {
    host: 'localhost', // host : 사용할 DB가 설치된 호스트의 IP
    port: '3306', // port : DB를 설치할 때 사용자가 지정한 포트번호. 따로 지정해주지 않았다면 기본값은 3306이다.
    user: 'root', // user : DB의 user 이름
    password: 'password', // password : DB를 설치할 때 사용자가 지정한 비밀번호
    database: 'cafesystem', // database : 사용할 데이터베이스의 이름
    multipleStatements: true  // 다중쿼리용 설정
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}