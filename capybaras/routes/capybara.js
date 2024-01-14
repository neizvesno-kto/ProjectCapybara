var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
const async = require("async")
var checkAuth = require("./../middleware/checkAuth.js")

router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка капибар</h1>');
});
router.get("/:nick", checkAuth, function(req, res, next) {
db.query(`SELECT * FROM capybaras WHERE capybaras.nick = '${req.params.nick}'`, (err, capybaras) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(capybaras.length == 0) return next(new Error("Нет такой капибары"))
var capybara = capybaras[0];
res.render('capybara', {
title: capybara.title,
picture: capybara.avatar,
desc: capybara.about
})
}
})
});
module.exports = router;