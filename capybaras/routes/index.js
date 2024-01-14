const express = require('express');
const router = express.Router();
const Capybara = require("../models/capybara").Capybara;
var User = require("./../models/User").User

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {

    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});
router.get('/logreg', (req, res, next) => {
    res.render('logreg', { title: 'Вход' });
  });
  router.post('/logreg', async function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await User.findOne({ username });
        
        if (user) {
            if (user.checkPassword(password)) {
                req.session.user = user._id;
                res.redirect('/');
            } else {
                res.render('logreg', { title: 'Вход', error: 'Неправильный пароль' });
            }
        } else {
            const newUser = new User({ username, password });
            await newUser.save();
            req.session.user = newUser._id;
            res.redirect('/');
        }
    } catch (err) {
        next(err);
    }
  });

  

module.exports = router;