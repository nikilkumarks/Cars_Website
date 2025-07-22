import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CarCard = ({ car, isSelected, onCompareToggle }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#111214] rounded-2xl p-4 shadow-xl transition-all duration-300 border border-[#2b2b2b]"
    >
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="mt-4">
        <h2 className="text-white text-2xl font-semibold tracking-wide">
          {car.brand} {car.model}
        </h2>

        <p className="text-[#d1d5db] text-lg mt-1">
          ₹{car.price.toLocaleString()}
        </p>

        <div className="flex flex-wrap gap-2 mt-3 text-sm">
          <span className="bg-[#2b2b2b] text-gray-300 px-3 py-1 rounded-full">
            {car.fuel}
          </span>
          <span className="bg-[#2b2b2b] text-gray-300 px-3 py-1 rounded-full">
            {car.transmission}
          </span>
          <span className="bg-[#2b2b2b] text-gray-300 px-3 py-1 rounded-full">
            {car.mileage} km/l
          </span>
        </div>

        <div className="flex justify-between items-center mt-5">
          <button
            onClick={() => navigate(`/car/${car.id}`)}
            className="text-blue-400 hover:underline text-sm font-medium"
          >
            View Details
          </button>

          <button
            onClick={onCompareToggle}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
              isSelected
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {isSelected ? "Remove" : "Compare"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
