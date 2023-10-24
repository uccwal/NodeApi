var express = require('express');
var router = express.Router();

const db = require('../db');
// GET /users 엔드포인트 - 모든 사용자 목록 반환
router.get('/', (req, res) => {
  const query = 'SELECT * FROM books';

  db.query(query, (err, results) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      res.status(500).json({ error: '서버 오류' });
      return;
    }
    res.json(results);
  });
});


module.exports = router;
