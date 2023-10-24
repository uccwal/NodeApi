const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'svc.sel5.cloudtype.app',
    user: 'root',
    password: '0000',
    database: 'cmon',
    port: '30306'
});
db.connect((err) => {
    if (err) {
        console.error('MySQL 연결 오류:', err);
    } else {
        console.log('MySQL에 연결되었습니다.');
    }
});

module.exports = db;