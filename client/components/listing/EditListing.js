import React from "react";
import listingModel from "../../../server/models/listingModel";

const EditListing = ({ listing, setListing }) => {
  const handleSave = () => {
    const address = document.getElementById("editAddress").value;
    const city = document.getElementById("editCity").value;
    const zipCode = document.getElementById("editZipCode").value;
    const price = document.getElementById("editPrice").value;
    const moveInDate = document.getElementById("editDate").value;
    const numBedBath = document.getElementById("editBedBath").value;
    const squareFootage = document.getElementById("editSquareFootage").value;
    const notes = document.getElementById("editNotes").value;

    const add = document.getElementById("addy").value;
    console.log("addy", add);

    const arr = [...listing];
    console.log(arr);
    let prevAddress = undefined;
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

    fetch("/listing", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressData),
    });
  };
  // return (
  //   <div>
  //     <div>
  //       <form id="editListing">
  //         <div>
  //           <label>
  //             Address:
  //             <input id="editAddress" />
  //           </label>
  //         </div>
  //         <div>
  //           <label>
  //             City:
  //             <input id="editCity" />
  //           </label>
  //         </div>
  //         <div>
  //           <label>
  //             Zip Code:
  //             <input id="editZipCode" />
  //           </label>
  //         </div>
  //         <div>
  //           <label>
  //             Price:
  //             <input id="editPrice" />
  //           </label>
  //         </div>
  //         <div>
  //           <label>
  //             Move In Date:
  //             <input id="editDate" />
  //           </label>
  //         </div>
  //         <div>
  //           <label>
  //             Bed/Bath:
  //             <input id="editBedBath" />
  //           </label>
  //         </div>
  //         <div>
  //           <label>
  //             Square Footage:
  //             <input id="editSquareFootage" />
  //           </label>
  //         </div>
  //         <div>
  //           <label>
  //             Notes:
  //             <input id="editNotes" />
  //           </label>
  //         </div>
  //       </form>
  //       <div>
  //         <button>button2</button>
  //         <button>button3</button>
  //         <button>button4</button>
  //         <button onClick={handleSave}>Save</button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div>
        <form id="editListing">
          <div className="mb-4">
            <label className="text-gray-600 block">Address:</label>
            <input
              id="editAddress"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block">City:</label>
            <input
              id="editCity"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block">Zip Code:</label>
            <input
              id="editZipCode"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block">Price:</label>
            <input
              id="editPrice"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block">Move In Date:</label>
            <input
              id="editDate"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block">Bed/Bath:</label>
            <input
              id="editBedBath"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block">Square Footage:</label>
            <input
              id="editSquareFootage"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block">Notes:</label>
            <input
              id="editNotes"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
        </form>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mr-2">
          Button2
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mr-2">
          Button3
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mr-2">
          Button4
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditListing;
