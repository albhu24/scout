import React from "react";
import Map from "./Map";
import NewListing from "./NewListing";

const MapLayout = ({
  setListing,
  state,
  setLocation,
  location,
  zoom,
  setZoom,
  marker,
  setMarker,
}) => {
  return (
    <div>
      <div>
        <NewListing
          setLocation={setLocation}
          location={location}
          setListing={setListing}
          state={state}
          zoom={zoom}
          setZoom={setZoom}
          marker={marker}
          setMarker={setMarker}
        />
      </div>
      <div>
        <Map
          location={location}
          zoom={zoom}
          marker={marker}
          setMarker={setMarker}
        />
      </div>
    </div>
  );
};

export default MapLayout;
