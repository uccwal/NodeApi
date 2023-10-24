var express = require('express');
var router = express.Router();
const db = require('../db');
router.use(express.json());

router.delete('/:id', (req, res) => {
  const userId = req.params.id; // URL에서 사용자 ID 가져오기

  // DELETE 쿼리 생성
  const query = 'DELETE FROM books WHERE id = ?';

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      res.status(500).json({ error: '데이터베이스 오류' });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: '사용자를 찾을 수 없음' });
    } else {
      res.json({ message: '사용자가 삭제되었습니다.' });
    }
  });
});


module.exports = router;
