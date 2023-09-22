import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const MAP_API_KEY = "AIzaSyDzo1wTcWYDf_JBLnrioWiUhyRKMxLidc4";
import React from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
  });
  if (!isLoaded) return <div></div>;
  return <Test />;
}

function Test() {
  console.log("test");
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 37.76852786726268, lng: -122.4520234916232 }}
      mapContainerStyle={containerStyle}
    ></GoogleMap>
  );
}

export default Map;
