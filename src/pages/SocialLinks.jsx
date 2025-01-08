import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'; // Added for Facebook icon

const SocialLinks = () => {
  return (
    <div className="absolute bottom-8 left-0 font-monter text-xs lg:text-sm">
      <a
        href="https://www.instagram.com/smilefotobox.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-4 hover:text-pink-500 transition-colors"
      >
        <InstagramIcon className="mr-2" /> Instagram
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-4 hover:text-blue-500 transition-colors"
      >
        <FacebookIcon className="mr-2" /> Facebook
      </a>
    </div>
  );
};

export default SocialLinks;
