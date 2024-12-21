// SocialLinks.js
import React from "react";

const SocialLinks = () => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
      <a
        href="https://instagram.com"
        className="text-white mx-4 hover:text-yellow-500 transition-colors"
      >
        Instagram
      </a>
      <a
        href="https://facebook.com"
        className="text-white mx-4 hover:text-blue-500 transition-colors"
      >
        Facebook
      </a>
    </div>
  );
};

export default SocialLinks;
