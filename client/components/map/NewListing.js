import React from "react";
import Listing from "../listing/Listing.js";
import Map from "./Map";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Marker } from "@react-google-maps/api";
import homeIcon from "../../icons/home.svg";
import Modal from "react-modal";

const NewListing = ({
  setListing,
  listing,
  location,
  setLocation,
  zoom,
  setZoom,
  marker,
  setMarker,
  savedMarkers,
  setSavedMarkers,
  checked,
  setChecked,
}) => {
  async function handleClick() {
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zipCode").value;
    const geoLocationAddress = `${address}, ${city}, ${zipCode}, California`;

    // Updating listing state-> move this into handleSave

    // Finding Geolocation of address
    const result = await getGeocode({
      address: geoLocationAddress,
    });
    const { lat, lng } = await getLatLng(result[0]);
    const geoLocation = [lat, lng];

    // Setting GeoLocation to Center (Updating location state)
    setLocation(geoLocation);
    setZoom(18);

    // Displaying search marker (Updating state marker)
    const markerArr = [
      <Marker key={marker.length} position={{ lat: lat, lng: lng }} />,
    ];
    setMarker(markerArr);
  }

  async function handleSave() {
    // db functionality

    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zipCode").value;
    const geoLocationAddress = `${address}, ${city}, ${zipCode}, California`;

    // const price = document.getElementById("price").value;
    // const moveInDate = document.getElementById("date").value;
    // const numBedBath = document.getElementById("bedbath").value;
    // const squareFootage = document.getElementById("squarefoot").value;
    // const notes = document.getElementById("notes").value;
    const addressData = { address: address, city: city, zipCode: zipCode };

    await fetch("/listing", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressData),
    });

    // // Updating save listing state

    const arr = [
      ...listing,
      {
        address,
        city,
        zipCode,
        checked: false,
        price: undefined,
        moveInDate: undefined,
        numBedBath: undefined,
        squareFootage: undefined,
        notes: undefined,
      },
    ];
    setListing(arr);

    // Finding Geolocation of address
    const result = await getGeocode({
      address: geoLocationAddress,
    });
    const { lat, lng } = await getLatLng(result[0]);
    const geoLocation = [lat, lng];

    // Setting GeoLocation to Center (Updating location state)
    // maybe we dont need to set location just, only when it is searched
    // setLocation(geoLocation);

    // Setting saveListingState
    // const savedMarkersArr = [...savedMarkers];
    // savedMarkersArr.push(
    //   <Marker
    //     key={`SM${marker.length}`}
    //     position={{ lat: lat, lng: lng }}
    //     // icon={homeIcon} // sizing is weird here, need to debug
    //   />
    // );
    // setSavedMarkers(savedMarkersArr);

    // Fixing the saveMarkers portion
    const savedMarkersArr = [...savedMarkers];
    savedMarkersArr.push([address, lat, lng]);
    setSavedMarkers(savedMarkersArr);
  }
  // return (
  //   <div>
  //     <form id="listing">
  //       <div>
  //         <label>
  //           Address:
  //           <input id="address" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           City:
  //           <input id="city" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           Zip Code:
  //           <input id="zipCode" />
  //         </label>
  //       </div>
  //     </form>
  //     <div>
  //       <button onClick={handleClick}>Search</button>
  //       <button onClick={handleSave}>Save</button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <form id="listing">
        <div className="mb-3">
          <label className="text-gray-600">
            Address:
            <input
              id="address"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="text-gray-600">
            City:
            <input
              id="city"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="text-gray-600">
            Zip Code:
            <input
              id="zipCode"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
      </form>
      <div className="flex justify-between">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Search
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

export default NewListing;
