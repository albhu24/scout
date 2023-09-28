const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.verifyUser, (req, res, next) => {
  return res.sendStatus(200);
});

module.exports = router;
