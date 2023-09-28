import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const MAP_API_KEY = "AIzaSyDzo1wTcWYDf_JBLnrioWiUhyRKMxLidc4";
import React from "react";
import { useState } from "react";
const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map({ location, zoom, marker, savedMarkers }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
  });
  if (!isLoaded) return <div></div>;
  return (
    <MapAndMarker
      location={location}
      zoom={zoom}
      marker={marker}
      savedMarkers={savedMarkers}
    />
  );
}

function MapAndMarker({ location, zoom, marker, savedMarkers }) {
  return (
    <div>
      <GoogleMap
        zoom={zoom}
        center={{ lat: location[0], lng: location[1] }}
        mapContainerStyle={containerStyle}
      >
        {marker}
        {/* {savedMarkers} */}
        {savedMarkers.map((item, index) => (
          <Marker key={index} position={{ lat: item[1], lng: item[2] }} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
