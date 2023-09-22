import React from "react";

const Listing = ({
  address,
  city,
  zipCode,
  price,
  moveInDate,
  bedBath,
  square,
  notes,
}) => {
  return (
    <div>
      <form>
        <div>Address: {address}</div>
        <div>City: {city} </div>
        <div>Zip Code: {zipCode} </div>
        <div>Price: {price}</div>
        <div>Move in Date: {moveInDate} </div>
        <div>House Info: </div>
        <div>Bed/Bath: {bedBath}</div>
        <div>Square Footage: {square}</div>
        <div>Notes: {notes}</div>
      </form>
      <button>edit</button>
    </div>
  );
};
export default Listing;
