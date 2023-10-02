const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: { type: String },
  city: { type: String },
  zipCode: { type: Number },
  price: { type: Number },
  moveInDate: { type: String },
  numBedBath: { type: String },
  squareFootage: { type: Number },
  notes: { type: String },
});

module.exports = mongoose.model("Listing", listingSchema);
