import React, { useRef } from "react";

const BookingSection = ({
  bookingRef,
  formData,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div
      ref={bookingRef}
      className="w-full bg-white py-16 text-center mt-[-100px]"
    >
      <h2 className="text-3xl sm:text-4xl text-gray-900 mb-8">
        Book Your Event
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-4">
        Ready to capture your special moments? Book your Smile Fotobox today!
      </p>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="px-6 py-3 w-full sm:w-72 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="px-6 py-3 w-full sm:w-72 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            className="px-6 py-3 w-full sm:w-72 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Additional Info (Optional)"
            className="px-6 py-3 w-full sm:w-96 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="px-8 py-4 text-xl font-bold text-white bg-black rounded-lg hover:scale-105 transition-transform"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingSection;
