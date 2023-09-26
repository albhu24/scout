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
  return (
    <div>
      <div>
        <form id="editListing">
          <div>
            <label>
              Address:
              <input id="editAddress" />
            </label>
          </div>
          <div>
            <label>
              City:
              <input id="editCity" />
            </label>
          </div>
          <div>
            <label>
              Zip Code:
              <input id="editZipCode" />
            </label>
          </div>
          <div>
            <label>
              Price:
              <input id="editPrice" />
            </label>
          </div>
          <div>
            <label>
              Move In Date:
              <input id="editDate" />
            </label>
          </div>
          <div>
            <label>
              Bed/Bath:
              <input id="editBedBath" />
            </label>
          </div>
          <div>
            <label>
              Square Footage:
              <input id="editSquareFootage" />
            </label>
          </div>
          <div>
            <label>
              Notes:
              <input id="editNotes" />
            </label>
          </div>
        </form>
        <div>
          <button>button2</button>
          <button>button3</button>
          <button>button4</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
