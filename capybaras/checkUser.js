var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/all")
var User = require("./models/User.js").User
var first_user = new User({
username: "Vasya",
password: "qwerty"
})

first_user.save().then((user) => {
    console.log(user);
  }).catch((err) => {
    throw err;
  });