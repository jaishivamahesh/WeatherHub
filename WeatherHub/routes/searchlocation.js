
// routes/searchlocation.js
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('searchlocation', { title: 'WeatherHub' });
});
router.get('/presearchlocation', function (req, res, next) {
  res.render('presearchlocation', { title: 'WeatherHub' });
});

module.exports = router;
