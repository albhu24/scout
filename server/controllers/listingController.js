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
  return next();
};

listingController.updateListing = async (req, res, next) => {
  console.log(prevAddress);
  const {
    prevAddress,
    address,
    city,
    zipCode,
    price,
    moveInDate,
    numBedBath,
    squareFootage,
    notes,
  } = req.body;
  await Listing.updateOne(
    { address: prevAddress },
    {
      address: address,
      city: city,
      zipCode: Number(zipCode),
      price: Number(price),
      numBedBath: Number(numBedBath),
      squareFootage: Number(squareFootage),
      moveInDate: moveInDate,
      notes: notes,
    }
  );
  return next();
};

listingController.deleteListing = async (req, res, next) => {
  const { deleteAddress } = req.body;
  await Listing.deleteOne({ address: deleteAddress });
  return next;
};
module.exports = listingController;
