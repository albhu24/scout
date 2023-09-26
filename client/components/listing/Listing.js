import React from "react";

const Listing = ({
  address,
  city,
  zipCode,
  price,
  moveInDate,
  numBedBath,
  squareFootage,
  notes,
  checked,
  listing,
  setListing,
  keyIndex,
}) => {
  function onChange() {
    // update check boolean
    const currentObj = listing[keyIndex]; //currentObj = {checked: true}
    currentObj["checked"] = !currentObj.checked;

    // update listing state with this updated curr obj
    const updatedListingState = [...listing];
    updatedListingState[keyIndex] = currentObj;
    setListing(updatedListingState);
  }

  return (
    <div>
      <form>
        <div>
          <input type="checkbox" checked={checked} onChange={onChange}></input>
        </div>
        <img></img>
        <div>
          Upload a image:
          <input id="imageUpload" type="file" multiple accept="image/*" />
        </div>
        <div id="addy">Address: {address}</div>
        <div>City: {city} </div>
        <div>Zip Code: {zipCode} </div>
        <div>Price: {price}</div>
        <div>Move in Date: {moveInDate}</div>
        <div>House Info: </div>
        <div>Bed/Bath: {numBedBath}</div>
        <div>Square Footage: {squareFootage}</div>
        <div>Notes: {notes} </div>
      </form>
    </div>
  );
};
export default Listing;
