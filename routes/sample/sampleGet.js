var express = require('express');
var router = express.Router();

/* GET users listing. */
const books = [
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
  { id: 3, title: 'Book 3' },
];
router.get('/', function(req, res, next) {
  res.json(books);
});

module.exports = router;
