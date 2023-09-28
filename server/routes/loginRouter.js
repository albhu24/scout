const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.createAccount, (req, res, next) => {
  return res.sendStatus(200);
});

module.exports = router;
