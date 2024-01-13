const express = require('express');
const router = express.Router();
const Capybara = require("../models/capybara").Capybara;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
   
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});


module.exports = router;