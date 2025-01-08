import React from "react";


const EquipmentSection = () => {
  const equipment = [
    { name: "Camera", image: "/camera.jpg", description: "High-resolution DSLR for perfect shots." },
    { name: "Lighting", image: "/lighting.jpg", description: "Softbox lighting for balanced lighting." },
    { name: "Lens", image: "/lens.jpg", description: "Wide-angle lens for creative shots." },
  ];

  return (
    <div className="my-4 max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Equipment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentSection;
