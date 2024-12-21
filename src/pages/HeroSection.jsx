// HeroSection.js
import React from "react";

const HeroSection = ({ backgroundImage, handleScrollToBooking }) => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-md"></div>

      {/* Content Container - Title, Tagline at the Top */}
      <div className="absolute top-10 w-full text-center z-10 space-y-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Smile Fotobox
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-white font-medium">
          "Your Smile is our Best Accessory"
        </p>
      </div>

      {/* Centered Button */}
      <div className="absolute flex justify-center items-center w-full h-full">
        <button
          onClick={handleScrollToBooking}
          className="px-8 py-4 text-xl font-bold text-white bg-black bg-opacity-70 rounded-lg hover:scale-105 transition-transform mt-8"
        >
          Book Your Event
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
