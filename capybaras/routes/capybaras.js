var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с capybaras');
});

router.get('/capybara_s_apelsinom', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/capybara_v_ochkah', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/capybara_v_baseine', function(req, res, next) {
    res.send('respond with a resource');
});

router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });    
module.exports = router;