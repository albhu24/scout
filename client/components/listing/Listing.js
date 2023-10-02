import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import ListingGallery from "./ListingGallery";

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
  const [modal, setModal] = useState(false);
  function onChange() {
    // update check boolean
    const currentObj = listing[keyIndex]; //currentObj = {checked: true}
    currentObj["checked"] = !currentObj.checked;

    // update listing state with this updated curr obj
    const updatedListingState = [...listing];
    updatedListingState[keyIndex] = currentObj;
    setListing(updatedListingState);
  }
  async function handleClick(e) {
    e.preventDefault();
    const input = document.getElementById("imageInput");

    if (!input) {
      console.error("Input element not found.");
      return;
    }

    const files = input.files;

    if (!files) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    formData.append("listingName", address); // to create folder with

    console.log("formData: ", formData); // shows empty object, but the data is in there, maybe i need to look somewhere inside the object?
    console.log("formData get: ", formData.get("images")); // only shows 1 file, but all files are in there

    try {
      await fetch("/images", {
        method: "POST",
        mode: "cors",
        body: formData,
      });
    } catch (e) {
      console.log("POST request to backend image endpoint failed");
    }
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

  // return (
  //   <div className="w-full m-auto p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  //     <div className="flex justify-between items-center mb-4">
  //       <span className="font-semibold text-lg text-gray-700">Listing</span>
  //       <input
  //         type="checkbox"
  //         checked={checked}
  //         onChange={onChange}
  //         className="form-checkbox h-5 w-5 text-blue-500 rounded"
  //       />
  //     </div>

  //     <form className="space-y-4">
  //       <div className="flex items-center space-x-2">
  //         <label htmlFor="imageInput" className="text-gray-600">
  //           Upload images:
  //         </label>
  //         <input
  //           type="file"
  //           id="imageInput"
  //           name="images"
  //           multiple
  //           className="border p-2 rounded"
  //         />
  //       </div>

  //       <button
  //         onClick={handleClick}
  //         className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
  //       >
  //         Upload
  //       </button>

  //       <div className="text-gray-600 space-y-2">
  //         <p>
  //           <span className="text-gray-800 font-medium">Address:</span>{" "}
  //           {address}
  //         </p>
  //         <p>
  //           <span className="text-gray-800 font-medium">City:</span> {city}
  //         </p>
  //         <p>
  //           <span className="text-gray-800 font-medium">Zip Code:</span>{" "}
  //           {zipCode}
  //         </p>
  //         <p>
  //           <span className="text-gray-800 font-medium">Price:</span> ${price}
  //         </p>
  //         <p>
  //           <span className="text-gray-800 font-medium">Move in Date:</span>{" "}
  //           {moveInDate}
  //         </p>
  //         <p>
  //           <span className="text-gray-800 font-medium">Bed/Bath:</span>{" "}
  //           {numBedBath}
  //         </p>
  //         <p>
  //           <span className="text-gray-800 font-medium">Square Footage:</span>{" "}
  //           {squareFootage} sqft
  //         </p>
  //         <p>
  //           <span className="text-gray-800 font-medium">Notes:</span> {notes}
  //         </p>
  //       </div>
  //     </form>

  //     <div className="mt-4">
  //       <Modal isOpen={modal}>
  //         <ListingGallery address={address} setModal={setModal} />
  //       </Modal>
  //     </div>

  //     <button
  //       onClick={() => setModal(true)}
  //       className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
  //     >
  //       View Pictures
  //     </button>
  //   </div>
  // );
  return (
    <div className="w-full m-auto p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-lg text-gray-700">Listing</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-blue-500 rounded"
        />
      </div>

      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="imageInput" className="text-gray-600">
            Upload images:
          </label>
          <input
            type="file"
            id="imageInput"
            name="images"
            multiple
            className="border p-2 rounded appearance-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
          />
        </div>

        <button
          onClick={handleClick}
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Upload
        </button>

        <div className="text-gray-600 space-y-2">
          {/* The rest of the information display remains consistent. */}
          <p>
            <span className="text-gray-800 font-medium">Address:</span>{" "}
            {address}
          </p>
          <p>
            <span className="text-gray-800 font-medium">City:</span> {city}
          </p>
          <p>
            <span className="text-gray-800 font-medium">Zip Code:</span>{" "}
            {zipCode}
          </p>
          <p>
            <span className="text-gray-800 font-medium">Price:</span> ${price}
          </p>
          <p>
            <span className="text-gray-800 font-medium">Move in Date:</span>{" "}
            {moveInDate}
          </p>
          <p>
            <span className="text-gray-800 font-medium">Bed/Bath:</span>{" "}
            {numBedBath}
          </p>
          <p>
            <span className="text-gray-800 font-medium">Square Footage:</span>{" "}
            {squareFootage} sqft
          </p>
          <p>
            <span className="text-gray-800 font-medium">Notes:</span> {notes}
          </p>
        </div>
      </form>

      <div className="mt-4">
        <Modal isOpen={modal}>
          <ListingGallery address={address} setModal={setModal} />
        </Modal>
      </div>

      <button
        onClick={() => setModal(true)}
        className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        View Pictures
      </button>
    </div>
  );
};
export default Listing;
