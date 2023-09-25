const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: { type: String },
  city: { type: String },
  zipCode: { type: Number },
  price: { type: Number },
  moveInDate: { type: Date },
  numBedBath: { type: Number },
  squareFootage: { type: Number },
  Notes: { type: String },
});

module.exports = mongoose.model("Listing", listingSchema);
