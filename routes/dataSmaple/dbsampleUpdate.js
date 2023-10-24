var express = require('express');
var router = express.Router();
const db = require('../db');
router.use(express.json());

// PUT /users/:id 엔드포인트 - 사용자 정보 업데이트
router.put('/:id', (req, res) => {
  const booksId = req.params.id;
  const { title, author } = req.body;

  if (!title && !author) {
    res.status(400).json({ error: '사용자 이름 또는 이메일 중 하나 이상을 제공해야 합니다.' });
    return;
  }

  // 업데이트할 필드와 값을 설정
  const updateFields = [];
  const updateValues = [];

  if (title) {
    updateFields.push('title = ?');
    updateValues.push(title);
  }

  if (author) {
    updateFields.push('author = ?');
    updateValues.push(author);
  }

  // 업데이트 쿼리 생성
  const query = `UPDATE books SET ${updateFields.join(', ')} WHERE id = ?`;
  updateValues.push(booksId);

  db.query(query, updateValues, (err, result) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      res.status(500).json({ error: '데이터베이스 오류' });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: '사용자를 찾을 수 없음' });
    } else {
      res.json({ message: '사용자 정보가 업데이트되었습니다.' });
    }
  });
});


module.exports = router;
