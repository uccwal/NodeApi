var express = require('express');
var router = express.Router();

// 책 목록 데이터 (임시로 배열에 저장)
const books = [];

// POST /books 엔드포인트 - 새로운 책 추가
router.post('/', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    res.status(400).json({ error: '제목과 작가를 모두 제공해야 합니다.' });
    return;
  }

  const newBook = { title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.get('/', function(req, res, next) {
  res.json(books);
});

module.exports = router;
