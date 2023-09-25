import React from "react";
import Listing from "./Listing";
const ListingLayout = ({ listingState, setListing }) => {
  const handleDeleteClick = () => {
    const listingArr = listingState.filter((e) => e["checked"] === false);
    setListing(listingArr);
  };
  return (
    <div>
      <button>Edit</button>
      <button onClick={handleDeleteClick}>Delete </button>
      {listingState.map((item, index) => {
        return (
          <Listing
            address={item.address}
            city={item.city}
            zipCode={item.zipCode}
            checked={item.checked}
            listing={listingState}
            setListing={setListing}
            // setChecked={setChecked}
            // listingCount={listing.length}
            keyIndex={index}
            // price={price}
            // moveInDate={moveInDate}
            // bedBath={numBedBath}
            // square={squareFootage}
            // notes={notes}
          />
        );
      })}
      {/* {listingState} */}
    </div>
  );
};

export default ListingLayout;
