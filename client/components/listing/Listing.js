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

  // return (
  //   <div>
  //     <form id="form">
  //       <div>
  //         <input type="checkbox" checked={checked} onChange={onChange}></input>
  //       </div>
  //       <button>Upload</button>
  //       <img></img>
  //       <div>
  //         Upload a image:
  //         <input id="imageUpload" type="file" multiple accept="image/*" />
  //       </div>
  //       <div id="addy">Address: {address}</div>
  //       <div>City: {city} </div>
  //       <div>Zip Code: {zipCode} </div>
  //       <div>Price: {price}</div>
  //       <div>Move in Date: {moveInDate}</div>
  //       <div>House Info: </div>
  //       <div>Bed/Bath: {numBedBath}</div>
  //       <div>Square Footage: {squareFootage}</div>
  //       <div>Notes: {notes} </div>
  //     </form>
  //   </div>
  // );

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <form id="form">
        <div className="mb-4">
          <label className="text-gray-600">
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="mr-2"
            />
            Upload a image:
          </label>
        </div>
        <div className="mb-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Upload
          </button>
        </div>
        <div className="mb-4">
          <img src="" alt="Uploaded Image" className="max-w-full" />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Address: {address}</label>
        </div>
        <div className="mb-4">City: {city}</div>
        <div className="mb-4">Zip Code: {zipCode}</div>
        <div className="mb-4">Price: {price}</div>
        <div className="mb-4">Move in Date: {moveInDate}</div>
        <div className="mb-4">House Info:</div>
        <div className="mb-4">Bed/Bath: {numBedBath}</div>
        <div className="mb-4">Square Footage: {squareFootage}</div>
        <div className="mb-4">Notes: {notes}</div>
      </form>
    </div>
  );
};
export default Listing;
