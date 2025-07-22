import React from "react";
import { motion } from "framer-motion";

const CarComparisonBlocks = ({ cars }) => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">Compare Cars</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car, idx) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-2xl font-semibold text-cyan-300">{car.brand} {car.model}</h3>
              <p className="text-sm text-gray-400">₹ {car.price.toLocaleString()}</p>
              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                <div><span className="text-gray-500">Fuel:</span> {car.fuel}</div>
                <div><span className="text-gray-500">Transmission:</span> {car.transmission}</div>
                <div><span className="text-gray-500">Mileage:</span> {car.mileage} km/l</div>
                <div><span className="text-gray-500">Seats:</span> {car.seats}</div>
                <div><span className="text-gray-500">Top Speed:</span> {car.topSpeed} km/h</div>
                <div><span className="text-gray-500">Boot Space:</span> {car.bootSpace} L</div>
                <div className="col-span-2"><span className="text-gray-500">Engine:</span> {car.engine}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CarComparisonBlocks;
