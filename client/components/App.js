import MapLayout from "./map/MapLayout.js";
import React from "react";
import ListingLayout from "./listing/ListingLayout.js";
import { useState } from "react";
import TopNav from "./TopNav.js";

function App(props) {
  // State
  const [listing, setListing] = useState([]);
  const [location, setLocation] = useState([
    37.76852786726268, -122.4520234916232,
  ]);
  const [marker, setMarker] = useState([]);
  const [zoom, setZoom] = useState(10);

  console.log("listing state inside of app", listing);
  return (
    <>
      <TopNav />
      <MapLayout
        className="mapLayout"
        location={location}
        setLocation={setLocation}
        setListing={setListing}
        state={listing}
        zoom={zoom}
        setZoom={setZoom}
        marker={marker}
        setMarker={setMarker}
      />
      <ListingLayout className="listingLayout" state={listing} />
    </>
  );
}

export default App;
