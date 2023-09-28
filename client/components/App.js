// // import MapLayout from "./map/MapLayout.js";
// // import React, { useEffect } from "react";
// // import ListingLayout from "./listing/ListingLayout.js";
// // import { useState } from "react";
// // import TopNav from "./TopNav.js";

// // function App(props) {
// //   // State
// //   const [listing, setListing] = useState([]);
// //   const [location, setLocation] = useState([
// //     37.76852786726268, -122.4520234916232,
// //   ]);

// //   const [marker, setMarker] = useState([]);
// //   const [savedMarkers, setSavedMarkers] = useState([]);
// //   const [zoom, setZoom] = useState(10);
// //   const [checked, setChecked] = useState([]); // get rid of chcecked chain

// //   console.log("listing in app = ", listing);

// //   return (
// //     <>
// //       <TopNav />
// //       <MapLayout
// //         className="mapLayout"
// //         location={location}
// //         setLocation={setLocation}
// //         setListing={setListing}
// //         listing={listing}
// //         zoom={zoom}
// //         setZoom={setZoom}
// //         marker={marker}
// //         setMarker={setMarker}
// //         savedMarkers={savedMarkers}
// //         setSavedMarkers={setSavedMarkers}
// //         checked={checked}
// //         setChecked={setChecked}
// //       />
// //       <ListingLayout
// //         className="listingLayout"
// //         listingState={listing}
// //         setListing={setListing}
// //         savedMarkers={savedMarkers}
// //         setSavedMarkers={setSavedMarkers}
// //         checked={checked}
// //         setChecked={setChecked}
// //       />
// //     </>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import MapLayout from "./map/MapLayout.js";
// import ListingLayout from "./listing/ListingLayout.js";
// import TopNav from "./TopNav.js";

// function App(props) {
//   // State
//   const [listing, setListing] = useState([]);
//   const [location, setLocation] = useState([
//     37.76852786726268, -122.4520234916232,
//   ]);
//   const [marker, setMarker] = useState([]);
//   const [savedMarkers, setSavedMarkers] = useState([]);
//   const [zoom, setZoom] = useState(10);
//   const [checked, setChecked] = useState([]);

//   return (
//     <div className="bg-gray-100 h-screen">
//       <TopNav />

//       <div className="flex">
//         <MapLayout
//           className="w-3/5 p-8"
//           location={location}
//           setLocation={setLocation}
//           setListing={setListing}
//           listing={listing}
//           zoom={zoom}
//           setZoom={setZoom}
//           marker={marker}
//           setMarker={setMarker}
//           savedMarkers={savedMarkers}
//           setSavedMarkers={setSavedMarkers}
//           checked={checked}
//           setChecked={setChecked}
//         />

//         <ListingLayout
//           className="w-2/5 p-8"
//           listingState={listing}
//           setListing={setListing}
//           savedMarkers={savedMarkers}
//           setSavedMarkers={setSavedMarkers}
//           checked={checked}
//           setChecked={setChecked}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import MapLayout from "./map/MapLayout";
import ListingLayout from "./listing/ListingLayout";
import TopNav from "./TopNav";

function App(props) {
  // State
  const [listing, setListing] = useState([]);
  const [location, setLocation] = useState([
    37.76852786726268, -122.4520234916232,
  ]);
  const [marker, setMarker] = useState([]);
  const [savedMarkers, setSavedMarkers] = useState([]);
  const [zoom, setZoom] = useState(10);
  const [checked, setChecked] = useState([]);

  return (
    <div className="bg-gray-100 h-screen flex-row-reverse">
      <div className="w-70">
        {/* MapLayout takes up 70% */}
        <MapLayout
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
      </div>

      <div className="w-30">
        {/* ListingLayout takes up 30% */}
        <ListingLayout
          listingState={listing}
          setListing={setListing}
          savedMarkers={savedMarkers}
          setSavedMarkers={setSavedMarkers}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
    </div>
  );
}

export default App;
