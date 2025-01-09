import React from "react";

const InstagramPosts = () => {
  const postIds = ["DD08cpRRzFy", "DDs6lXfP5wI", "DD81VZOR4KQ", "DEIxwpxxhEk"];

  return (
    <div className="p-20 bg-gradient-to-tr from-yellow-400 via-purple-500 to-pink-500 " id="instagram">
      <h1 className="text-3xl font-monter mb-6">Smile Fotobox Co. Instagram</h1>{" "}
      {/* Title */}
      <div className="flex flex-wrap gap-8 justify-center ">
        {postIds.map((id, index) => (
          <div key={index} className="w-full md:w-72">
            <iframe
              src={`https://www.instagram.com/p/${id}/embed`}
              width="100%" // Set width to 100% to make it responsive
              height="500" // Adjust the height to ensure the post is fully visible
              scrolling="no"
              allowtransparency="true"
              title={`Instagram Post ${id}`}
              style={{ border: "none" }} // Optional, to remove the border
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
