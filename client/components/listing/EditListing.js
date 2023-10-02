import React from "react";
import listingModel from "../../../server/models/listingModel";

const EditListing = ({ listing, setListing, setModal }) => {
  const arr = [...listing];
  const prevValues = {};

  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked === true) {
      const currentListing = arr[i];
      prevValues.address = currentListing.address;
      prevValues.city = currentListing.city;
      prevValues.zipCode = currentListing.zipCode;
    }
  }
  console.log("prev values for input box", prevValues);

  const handleSave = () => {
    const address = document.getElementById("editAddress").value;
    const city = document.getElementById("editCity").value;
    const zipCode = document.getElementById("editZipCode").value;
    const price = document.getElementById("editPrice").value;
    const moveInDate = document.getElementById("editDate").value;
    const numBedBath = document.getElementById("editBedBath").value;
    const squareFootage = document.getElementById("editSquareFootage").value;
    const notes = document.getElementById("editNotes").value;

    // const add = document.getElementById("addy").value;

    const arr = [...listing];
    console.log(arr);

    let prevAddress = undefined;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked === true) {
        const currentListing = arr[i];
        prevAddress = currentListing.address;
        currentListing.address = address;
        currentListing.city = city;
        currentListing.zipCode = zipCode;
        currentListing.price = price;
        currentListing.moveInDate = moveInDate;
        currentListing.numBedBath = numBedBath;
        currentListing.squareFootage = squareFootage;
        currentListing.notes = notes;
      }
    }
    console.log(arr);
    setListing(arr);

    // find the listing, update listing, and save
    const addressData = {
      address,
      city,
      zipCode,
      price,
      moveInDate,
      numBedBath,
      squareFootage,
      notes,
      prevAddress,
    };

    // fetch("/listing", {
    //   method: "PUT",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(addressData),
    // });

    setModal(false);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
      <form id="editListing" className="w-full">
        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">
            Address:
          </label>
          <input
            id="editAddress"
            // placeholder="123 Main St"
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
            value={prevValues.address}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">City:</label>
          <input
            id="editCity"
            value={prevValues.city}
            // placeholder="City Name"
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">
            Zip Code:
          </label>
          <input
            id="editZipCode"
            // placeholder="12345"
            value={prevValues.zipCode}
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">Price:</label>
          <input
            id="editPrice"
            placeholder="$1000"
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">
            Move In Date:
          </label>
          <input
            id="editDate"
            placeholder="DD/MM/YYYY"
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">
            Bed/Bath:
          </label>
          <input
            id="editBedBath"
            placeholder="2 Beds / 1 Bath"
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">
            Square Footage:
          </label>
          <input
            id="editSquareFootage"
            placeholder="1000 sqft"
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 block mb-1 text-center">Notes:</label>
          <input
            id="editNotes"
            placeholder="Additional Information"
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 m-auto block transition-shadow focus:border-gray-400 focus:shadow-outline"
          />
        </div>
      </form>

      <div className="mt-6 flex space-x-4 w-full justify-center">
        <button
          onClick={handleSave}
          className="w-1/3 bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
        >
          Save
        </button>
        <button
          onClick={() => setModal(false)}
          className="w-1/3 bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditListing;
