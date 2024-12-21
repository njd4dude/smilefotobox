// GallerySection.js
import React from "react";

const GallerySection = ({ images }) => {
  return (
    <div className="w-full  bg-gray-900 pt-6  pb-40">
      <h2 className="text-3xl sm:text-4xl text-center text-white mb-8">
        Our Photobooth in Action
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-64 bg-gray-700 overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={`Event Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
