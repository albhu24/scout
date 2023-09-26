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
  const {
    address,
    prevAddress,
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

  console.log(await Listing.findOne({ price: Number(price) }));
  return next();
};

listingController.deleteListing = async (req, res, next) => {
  const { address } = req.body;
  for (let i = 0; i < address.length; i++) {
    await Listing.deleteOne({ address: address[i] });
  }
  return next;
};
module.exports = listingController;
