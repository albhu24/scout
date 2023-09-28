import React from "react";
import Listing from "./Listing";
import Popup from "reactjs-popup";
import EditListing from "./EditListing";

const centerPopupStyle = {
  width: "80%", // Adjust the width as needed
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const ListingLayout = ({
  listingState,
  setListing,
  savedMarkers,
  setSavedMarkers,
}) => {
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

    // Deleting markers from savedMarkers
    const arrMarkers = [...savedMarkers];
    const deleteArray = addressData["address"];
    const newmarkersSaved = [];
    for (let i = 0; i < arrMarkers.length; i++) {
      if (!deleteArray.includes(arrMarkers[i][0])) {
        newmarkersSaved.push(arrMarkers[i]);
      }
    }
    setSavedMarkers(newmarkersSaved);

    // Fetch to database
    fetch("/listing", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressData),
    });
  };

  // return (
  //   <div>
  //     <div>
  //       <Popup trigger={<button>Edit</button>} position="center center">
  //         <EditListing listing={listingState} setListing={setListing} />
  //       </Popup>
  //       <button onClick={handleDeleteClick}>Delete </button>
  //     </div>
  //     <div>
  //       {listingState.map((item, index) => {
  //         return (
  //           <Listing
  //             address={item.address}
  //             city={item.city}
  //             zipCode={item.zipCode}
  //             checked={item.checked}
  //             listing={listingState}
  //             setListing={setListing}
  //             keyIndex={index}
  //             price={item.price}
  //             moveInDate={item.moveInDate}
  //             numBedBath={item.numBedBath}
  //             squareFootage={item.squareFootage}
  //             notes={item.notes}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  return (
    <div className="w-30 p-4 border-l overflow-y-auto">
      {/* Edit and Delete Buttons */}
      <div className="mb-4">
        <Popup
          trigger={<button>Edit</button>}
          position="center center"
          contentStyle={centerPopupStyle} // Apply centering styles
        >
          <EditListing listing={listingState} setListing={setListing} />
        </Popup>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>

      {/* Listing Items */}
      {listingState.map((item, index) => (
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
      ))}
    </div>
  );
};

export default ListingLayout;
