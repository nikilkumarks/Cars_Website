import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCarSide } from "react-icons/fa";
import clsx from "clsx";

const CarCard = ({ car, isSelected, onCompareToggle }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -10,
        rotateX: 2,
        rotateY: -2,
        transition: { duration: 0.3 }
      }}
      style={{ perspective: 1000 }}
      className="glass group rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border border-white/5"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.model}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-md">
            Featured
          </span>
        </div>

        {/* Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button
            onClick={handleNavigate}
            className="bg-white text-black p-4 rounded-full hover:bg-primary hover:text-white transition-colors shadow-xl"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">{car.brand}</p>
            <h2 className="text-white text-2xl font-black font-outfit uppercase">
              {car.model}
            </h2>
          </div>
          <p className="text-white font-black text-xl font-outfit">
            ₹{(car.price / 10000000).toFixed(2)} Cr
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Fuel</p>
            <p className="text-white text-sm font-bold mt-1">{car.fuel}</p>
          </div>
          <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Mileage</p>
            <p className="text-white text-sm font-bold mt-1">{car.mileage} km/l</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handleNavigate}
            className="flex-grow bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-white/10"
          >
            View Details
          </button>

          <button
            onClick={onCompareToggle}
            className={clsx(
              "p-4 rounded-2xl transition-all duration-300 border",
              isSelected
                ? "bg-primary border-primary text-white"
                : "bg-transparent border-white/10 text-white hover:border-primary hover:text-primary"
            )}
          >
            <FaCarSide className="text-lg" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
