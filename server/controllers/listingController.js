const listingController = {};
const Listing = require("../models/listingModel");

listingController.setAddress = async (req, res, next) => {
  console.log("SERVER TEST");
  console.log(req.body);
  const { address, city, zipCode } = req.body;
  await Listing.create({
    address: address,
    city: city,
    zipCode: zipCode,
  });
  const result = await Listing.findOne({ zipCode: 95014 });
  console.log(result);
  return next();
};

module.exports = listingController;
