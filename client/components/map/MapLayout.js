import React from "react";
import Map from "./Map";
import NewListing from "./NewListing";

const MapLayout = ({
  setListing,
  listing,
  setLocation,
  location,
  zoom,
  setZoom,
  marker,
  setMarker,
  savedMarkers,
  setSavedMarkers,
  checked,
  setChecked,
}) => {
  return (
    <div>
      <div>
        <NewListing
          setLocation={setLocation}
          location={location}
          setListing={setListing}
          listing={listing}
          zoom={zoom}
          setZoom={setZoom}
          marker={marker}
          setMarker={setMarker}
          savedMarkers={savedMarkers}
          setSavedMarkers={setSavedMarkers}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div>
        <Map
          location={location}
          zoom={zoom}
          marker={marker}
          setMarker={setMarker}
          savedMarkers={savedMarkers}
        />
      </div>
    </div>
  );
};

export default MapLayout;
