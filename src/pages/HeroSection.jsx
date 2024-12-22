// HeroSection.js
import React from "react";
import SocialLinks from "./SocialLinks";

const HeroSection = ({ backgroundImage, handleScrollToBooking, logo }) => {
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

      <img
        src={logo}
        alt="Logo"
        className="absolute bottom-5 right-5 w-16 sm:w-32 " // Adjust width and position as needed
      />

      {/* Content Container - Title, Tagline at the Top */}
      <div className="absolute top-10 w-full text-center  space-y-4 font-monter">
        {/* Title */}
        <h1 className="text-6xl  font-extrabold text-white">Smile Fotobox Company</h1>

        {/* Tagline */}
        <p className="text-2xl text-white font-medium">
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
      <SocialLinks />
    </div>
  );
};

export default HeroSection;
