import React, { useState } from "react";
import setupImage from "../assets/equipment0.webp";
import backdrop0 from "../assets/backdrop0.png";
import backdrop1 from "../assets/backdrop1.png";
import backdrop2 from "../assets/backdrop2.png";

const PhotoboothEquipment = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [setupImage, backdrop0, backdrop1, backdrop2];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="my-12 max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg" id="equipment">
      <h2 className="text-3xl font-monter font-semibold mb-6 text-center">
        Our Photo Booth Setup and Backdrops
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg shadow-md overflow-hidden relative">
          <img
            src={images[currentImageIndex]}
            alt="Photo Booth Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
            <button
              onClick={prevImage}
              className="bg-white text-gray-700 p-2 w-6 h-6 rounded-full flex items-center justify-center opacity-40 hover:opacity-100"
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
            <button
              onClick={nextImage}
              className="bg-white text-gray-700 p-2 w-6 h-6 rounded-full flex items-center justify-center opacity-40 hover:opacity-100"
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">
            Customizable Backdrops to Fit Your Event
          </h3>
          <p className="text-gray-700">
            Our photo booth features a charming vintage wood design, offering a
            timeless and rustic vibe for your event. With a variety of
            customizable backdrops to choose from, it perfectly blends classic
            elegance with a touch of nostalgia. Whether you're aiming for a
            cozy, vintage feel or something uniquely creative, our photo booth
            and its diverse backdrop options will add a memorable touch to your
            event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoboothEquipment;
