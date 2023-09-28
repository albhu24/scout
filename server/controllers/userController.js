userController = {};

const User = require("../models/userModel");

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log("test verify user");
  try {
    const result = await User.findOne({
      username: username,
      password: password,
    });
    req.locals.loginInfo = {};
    console.log(result);
    return next();
  } catch (e) {
    return next(e);
  }
};
userController.createAccount = async (req, res, next) => {
  const { username, password, fullName } = req.body;
  // check if we input a username / password (required options)
  console.log(username, password, fullName);
  //
  await User.create({
    username: username,
    password: password,
    fullname: fullName,
  });
  return next();
};

module.exports = userController;
