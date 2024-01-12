const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test1');

const Capybara = require("./models/capybara").Capybara;

const capybara = new Capybara({
  title: "Капибара с очками",
  nick: "Capybara_s_ochkami"
});

console.log(capybara);

capybara.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });