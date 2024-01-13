var express = require('express');
var router = express.Router();
var Capybara = require("../models/capybara").Capybara

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с Capybaras');
});

router.get("/:nick", async (req, res, next) => {
    try {
      const capybara = await Capybara.findOne({ nick: req.params.nick });
      console.log(capybara);
      if (!capybara) {
        throw new Error("Нет такой капибары");
      }
      res.render('capybara', {
        title: capybara.title,
        picture: capybara.avatar,
        desc: capybara.desc
      });
    } catch (err) {
      next(err);
    }
  });
       
module.exports = router;