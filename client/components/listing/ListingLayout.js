import React from "react";
import Listing from "./Listing";

const ListingLayout = ({ state }) => {
  // this should be array of listings, probably based on state
  const arr = [...state];
  console.log(state.length);
  console.log("state inside of listinglayout", state);
  return <div>{arr}</div>;
};

export default ListingLayout;
