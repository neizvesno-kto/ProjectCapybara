var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/capibara_v_baseine', function(req, res, next) {
  res.send("<h1>Страница капибары в бассейне</h1>")
  });

router.get('/capibara_v_ochkah', function(req, res, next) {
  res.send("<h1>Страница капибары в очках</h1>")
  });

router.get('/capibara_s_apelsinom', function(req, res, next) {
  res.send("<h1>Страница капибары с апельсином</h1>")
  });

module.exports = router;
