const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ehddns12!@',
    database: 'mydatabase',
});
db.connect((err) => {
    if (err) {
        console.error('MySQL 연결 오류:', err);
    } else {
        console.log('MySQL에 연결되었습니다.');
    }
});

module.exports = db;