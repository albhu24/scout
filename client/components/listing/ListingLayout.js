import React from "react";
import Listing from "./Listing";
import Popup from "reactjs-popup";
import EditListing from "./EditListing";
const ListingLayout = ({ listingState, setListing }) => {
  const handleDeleteClick = () => {
    const deleteAddress = [];
    const listingArr = listingState.filter((e) => {
      if (e["checked"] === true) {
        deleteAddress.push(e.address);
      }
      return e["checked"] === false;
    });
    console.log(deleteAddress);
    setListing(listingArr);

    // database deleting might have to go here as well
    const addressData = {
      address: deleteAddress,
    };

    fetch("/listing", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressData),
    });
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
