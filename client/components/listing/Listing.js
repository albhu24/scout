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
  checked,
  listing,
  setListing,
  // setChecked,
  // listingCount,
  keyIndex,
}) => {
  // listingState = [{checked: true}, {checked:false}]

  // hi alby <3

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
        <input type="file" multiple accept="image/*"></input>
        <div>Address: {address}</div>
        <div>City: {city} </div>
        <div>Zip Code: {zipCode} </div>
        <div>Price: </div>
        <div>Move in Date: </div>
        <div>House Info: </div>
        <div>Bed/Bath: </div>
        <div>Square Footage: </div>
        <div>Notes: </div>
      </form>
    </div>
  );
};
export default Listing;
