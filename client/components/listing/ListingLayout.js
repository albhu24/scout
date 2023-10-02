import React from "react";
import Listing from "./Listing";
import Popup from "reactjs-popup";
import EditListing from "./EditListing";
import Modal from "react-modal";
import { useState } from "react";

const smallPopupStyle = {
  width: "200px", // Adjust the width as needed
  padding: "10px", // Add padding as desired
  background: "white", // Background color
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle effect
  borderRadius: "8px", // Rounded corners
};
const ListingLayout = ({
  listingState,
  setListing,
  savedMarkers,
  setSavedMarkers,
}) => {
  const [modal, setModal] = useState(false);
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
  return (
    <div className="w-full p-2">
      <div className="mb-4 flex justify-center">
        <button
          className="mr-2 bg-black text-white py-1 px-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
          onClick={() => setModal(true)}
        >
          Edit
        </button>
        <Modal isOpen={modal}>
          <EditListing
            listing={listingState}
            setModal={setModal}
            setListing={setListing}
          />
        </Modal>
        <button
          className="bg-gray-800 text-white py-1 px-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {listingState.map((item, index) => (
          <div className="w-1/4 p-2 m-auto">
            {" "}
            {/* Added m-auto to center each individual listing */}
            <Listing
              key={index}
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListingLayout;

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
