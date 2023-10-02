import React, { useState, useEffect } from "react";

const ListingGallery = ({ address, setModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSources, setImageSources] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make a POST request to fetch image sources from 'images/get' endpoint
    fetch("images/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folder: address }),
    })
      .then((response) => response.json())
      .then((data) => {
        setImageSources(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [address]);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {imageSources.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openImage(src)}
          >
            <img
              src={src}
              alt={`Image ${index}`}
              className="w-full h-auto rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeImage}
        >
          <div className="relative p-4 bg-white rounded-lg shadow-lg">
            <img src={selectedImage} alt="Enlarged" className="w-full" />
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setModal(false)}
        className="block mx-auto mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none"
      >
        Close
      </button>
    </div>
  );
};

export default ListingGallery;
