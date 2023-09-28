const express = require("express");

const listingController = require("../controllers/listingController");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   return res.sendStatus(200);
// });

router.post("/", listingController.setAddress, (req, res) => {
  return res.sendStatus(200);
});
router.put("/", listingController.updateListing, (req, res) => {
  return res.sendStatus(200);
});
router.delete("/", listingController.deleteListing, (req, res) =>
  res.sendStatus(200)
);

module.exports = router;
