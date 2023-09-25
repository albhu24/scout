import MapLayout from "./map/MapLayout.js";
import React, { useEffect } from "react";
import ListingLayout from "./listing/ListingLayout.js";
import { useState } from "react";
import TopNav from "./TopNav.js";

function App(props) {
  // State
  const [listing, setListing] = useState([]);
  const [location, setLocation] = useState([
    37.76852786726268, -122.4520234916232,
  ]);

  // 8======D
  const [marker, setMarker] = useState([]);
  const [savedMarkers, setSavedMarkers] = useState([]);
  const [zoom, setZoom] = useState(10);
  const [checked, setChecked] = useState([]); // get rid of chcecked chain

  // useEffect(() => {
  //   //

  // }, [checked])

  console.log("listing in app = ", listing);

  return (
    <>
      <TopNav />
      <MapLayout
        className="mapLayout"
        location={location}
        setLocation={setLocation}
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
      <ListingLayout
        className="listingLayout"
        listingState={listing}
        setListing={setListing}
        savedMarkers={savedMarkers}
        setSavedMarkers={setSavedMarkers}
        checked={checked}
        setChecked={setChecked}
      />
    </>
  );
}

export default App;
