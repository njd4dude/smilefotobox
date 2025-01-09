import React from "react";

const FeatCards = () => {
  return (
    <>
      {/* Feature Cards */}
      <div className="pt-8 w-full flex justify-center z-10 gap-3 md:gap-8 mt-10  ">
        <div className="bg-black bg-opacity-70 text-center text-white rounded-lg md:p-6 shadow-md w-28 md:w-72 landscape:w-52 flex flex-col items-center pb-4 px-2">
          <div className="bg-gray-200 bg-opacity-40 p-4 rounded-full mb-2 mt-2">
            {/* Icon for High Quality */}
            <i className="fas fa-camera-retro text-2xl text-yellow-400"></i>
          </div>
          <h3 className="text-md md:text-xl font-semibold mb-2 text-white">
            High Quality
          </h3>
          <p className="text-[10px] md:text-sm text-white">
            Capture vibrant, clear photos with professional DSLR cameras.
          </p>
        </div>

        <div className="bg-black bg-opacity-70 text-center text-white rounded-lg md:p-6 shadow-md w-28 md:w-72 landscape:w-52 flex flex-col items-center pb-4 px-2">
          <div className="bg-gray-200 bg-opacity-40 p-4 rounded-full mb-2 mt-2">
            {/* Icon for Variety of Props and Backdrops */}
            <i className="fas fa-boxes text-3xl text-blue-400"></i>
          </div>
          <h3 className="text-md md:text-xl font-semibold mb-2 text-white">
            Variety of Backdrops
          </h3>
          <p className="text-[10px] md:text-sm text-white">
            Choose from a range of backdrops to fit your event's theme.
          </p>
        </div>

        {/* New Feature Card for Custom Templates */}
        <div className="bg-black bg-opacity-70 text-center text-white rounded-lg md:p-6 shadow-md w-28 md:w-72 landscape:w-52 flex flex-col items-center pb-4 px-2">
          <div className="bg-gray-200 bg-opacity-40 p-4 rounded-full mb-2 mt-2">
            {/* Icon for Custom Templates */}
            <i className="fas fa-paint-brush text-3xl text-purple-400"></i>
          </div>
          <h3 className="text-md md:text-xl  font-semibold mb-2 text-white">
            Custom Templates
          </h3>
          <p className="text-[10px] md:text-sm text-white">
            Personalized photo templates to make your memories unique.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatCards;
