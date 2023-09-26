import React from "react";
import Listing from "./Listing";
import Popup from "reactjs-popup";
import EditListing from "./EditListing";
const ListingLayout = ({ listingState, setListing }) => {
  const handleDeleteClick = () => {
    const listingArr = listingState.filter((e) => e["checked"] === false);
    setListing(listingArr);

    // database deleting might have to go here as well
  };

  return (
    <div>
      <div>
        <Popup trigger={<button>Edit</button>} position="center center">
          <EditListing listing={listingState} setListing={setListing} />
        </Popup>
        <button onClick={handleDeleteClick}>Delete </button>
      </div>
      <div>
        {listingState.map((item, index) => {
          return (
            <Listing
              address={item.address}
              city={item.city}
              zipCode={item.zipCode}
              checked={item.checked}
              listing={listingState}
              setListing={setListing}
              keyIndex={index}
              price={item.price}
              moveInDate={item.moveInDate}
              numBedBath={item.numBedBath}
              squareFootage={item.squareFootage}
              notes={item.notes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListingLayout;
