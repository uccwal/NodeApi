var express = require('express');
var router = express.Router();
const db = require('../db');
router.use(express.json());

// POST /users 엔드포인트 - 새로운 사용자 추가
router.post('/', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    res.status(400).json({ error: '사용자 이름과 이메일을 모두 제공해야 합니다.' });
    return;
  }

  const query = 'INSERT INTO books (title, author) VALUES (?, ?)';
  const values = [title, author];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      res.status(500).json({ error: '데이터베이스 오류' });
      return;
    }

    const insertedId = result.insertId;
    res.status(201).json({ id: insertedId, title, author });
  });
});


module.exports = router;
