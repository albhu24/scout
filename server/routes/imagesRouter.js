const express = require("express");
const imageController = require("../controllers/imageController");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });

router.post(
  "/",
  upload.array("images", 12),
  imageController.saveToDb,
  (req, res) => {
    return res.sendStatus(200);
  }
);

router.post("/get", imageController.getImages, (req, res) => {
  console.log("TESTTTTTT");
  console.log(req.locals.urlArray, "inside of final middleware");
  return res.json(req.locals.urlArray);
});

module.exports = router;
