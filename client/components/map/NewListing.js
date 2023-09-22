import React from "react";
import Listing from "../listing/Listing.js";
import Map from "./Map";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Marker } from "@react-google-maps/api";

const NewListing = ({
  setListing,
  state,
  location,
  setLocation,
  zoom,
  setZoom,
  marker,
  setMarker,
}) => {
  async function handleClick() {
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zipCode").value;
    const price = document.getElementById("price").value;
    const moveInDate = document.getElementById("date").value;
    const numBedBath = document.getElementById("bedbath").value;
    const squareFootage = document.getElementById("squarefoot").value;
    const notes = document.getElementById("notes").value;

    const geoLocationAddress = `${address}, ${city}, ${zipCode}, California`;

    // Updating listing state
    const arr = state.slice();
    arr.push(
      <Listing
        key={state.length}
        address={address}
        city={city}
        zipCode={zipCode}
        price={price}
        moveInDate={moveInDate}
        bedBath={numBedBath}
        square={squareFootage}
        notes={notes}
      />
    );
    setListing(arr);

    // Finding Geolocation of address
    const result = await getGeocode({
      address: geoLocationAddress,
    });
    const { lat, lng } = await getLatLng(result[0]);
    const geoLocation = [lat, lng];

    // Setting GeoLocation to Center (Updating location state)
    setLocation(geoLocation);
    setZoom(18);

    // Displaying marker (Updating state marker)
    const markerArr = [...marker];
    markerArr.push(
      <Marker
        key={marker.length}
        position={{ lat: location[0], lng: location[1] }}
      />
    );
    setMarker(markerArr);
  }
  return (
    <div>
      <form id="listing">
        <div>
          <label>
            Address:
            <input id="address" />
          </label>
        </div>
        <div>
          <label>
            City:
            <input id="city" />
          </label>
        </div>
        <div>
          <label>
            Zip Code:
            <input id="zipCode" />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input id="price" />
          </label>
        </div>
        <div>
          <label>
            Move in Date:
            <input id="date" />
          </label>
        </div>
        <div>
          <label>House Info</label>
        </div>
        <div>
          <label>
            Bed/Bath:
            <input id="bedbath" />
          </label>
        </div>
        <div>
          <label>
            Square Footage:
            <input id="squarefoot" />
          </label>
        </div>
        <div>
          <label>
            Notes:
            <input id="notes" />
          </label>
        </div>
      </form>
      <div>
        <button onClick={handleClick}>Search</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default NewListing;
