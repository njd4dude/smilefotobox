import bannerImage from "../assets/banner.webp";

const Banner = () => {
  return (
    <div className="w-full">
      {/* Banner Container */}
      <div className="relative">
        {/* Banner Image with Dark Filter */}
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full object-cover h-52 lg:h-[250px] filter brightness-60" // Add the filter class
        />
      </div>
    </div>
  );
};

export default Banner;
