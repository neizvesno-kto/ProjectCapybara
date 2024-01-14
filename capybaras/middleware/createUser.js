const User = require("../models/User").User;

module.exports = async (req, res, next) => {
  res.locals.user = null;
  
  try {
    const user = await User.findById(req.session.user);
  
    res.locals.user = user;
    next();
  } catch (err) {
    next(err);
  }
};