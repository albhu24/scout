import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 64px)",
};

function Map({ location, zoom, marker, savedMarkers }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.MAPS_API_KEY,
  });

  if (loadError)
    return (
      <div className="text-red-500 font-bold text-center mt-5">
        Error loading maps
      </div>
    );
  if (!isLoaded)
    return (
      <div className="text-gray-500 font-bold text-center mt-5">
        Loading Map...
      </div>
    );

  return (
    <div className="h-screen w-full">
      <div className="relative w-full h-full">
        <MapAndMarker
          location={location}
          zoom={zoom}
          marker={marker}
          savedMarkers={savedMarkers}
        />
      </div>
    </div>
  );
}

function MapAndMarker({ location, zoom, marker, savedMarkers }) {
  return (
    <div className="absolute top-16 left-0 right-0 bottom-0">
      <GoogleMap
        zoom={zoom}
        center={{ lat: location[0], lng: location[1] }}
        mapContainerStyle={containerStyle}
      >
        {marker}
        {savedMarkers.map((item, index) => (
          <Marker key={index} position={{ lat: item[1], lng: item[2] }} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
