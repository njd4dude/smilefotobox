// Home.js
import React, { useRef, useState } from "react";
import HeroSection from "./HeroSection";
import SocialLinks from "./SocialLinks";
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import Test from "./Test";

const Home = () => {
  const backgroundImage = "/backgroundImg.jpg";
  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
  ];

  // Create a reference to the booking section
  const bookingRef = useRef(null);

  // State to handle form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    message: "",
  });

  // Function to handle scroll when the button is clicked
  const handleScrollToBooking = () => {
    bookingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="">
      <HeroSection
        backgroundImage={backgroundImage}
        handleScrollToBooking={handleScrollToBooking}
      />
      <SocialLinks />
      <GallerySection images={images} />
      <BookingSection
        bookingRef={bookingRef}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Test />
    </div>
  );
};

export default Home;
