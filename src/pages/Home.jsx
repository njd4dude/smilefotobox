// Home.js
// task 12/21: left off figuring how to pass info to email in booking section. I'm thinking of just doing google form for now.
import React, { useRef, useState } from "react";
import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import InstagramPosts from "./InstagramPosts";
import EquipmentSection from "./EquipmentSection";
import PhotoboothEquipment from "./PhotoboothEquipment";
import samplePrint from "../assets/samplePrint.webp";


const Home = () => {
  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
  ];
  const logo = "/smilefotoboxLogo.png";

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
        backgroundImage={samplePrint}
        handleScrollToBooking={handleScrollToBooking}
        logo={logo}
      />
      <PhotoboothEquipment />
      <InstagramPosts />
    </div>
  );
};

export default Home;
