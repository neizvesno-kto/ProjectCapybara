var express = require('express');
var router = express.Router();
var Capybara = require("../models/capybara").Capybara
const async = require("async")

router.get('/:nick', async function(req, res, next) {
  try {
    const [capybara, capybaras] = await Promise.all([
      Capybara.findOne({ nick: req.params.nick }),
      Capybara.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
  
    if (!capybara) {
      throw new Error("Нет такой капибары");
    }
    
    renderCapybara(res, capybara.title, capybara.avatar, capybara.desc, capybaras);
  } catch (err) {
    next(err);
  }
});

function renderCapybara(res, title, picture, desc, capybaras) {
  console.log(capybaras);

  res.render('capybara', {
    title: title,
    picture: picture,
    desc: desc,
    menu: capybaras
  });
}



module.exports = router;