import React from "react";
import { Fuel, Zap, Leaf, Flame } from "lucide-react";

const FilterBar = ({ currentFilter, onChange }) => {
  const fuels = [
    { label: "All", icon: <Fuel size={16} /> },
    { label: "Petrol", icon: <Flame size={16} /> },
    { label: "Diesel", icon: <Zap size={16} /> },
    { label: "Electric", icon: <Leaf size={16} /> },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-[#1a1a1a] rounded-xl shadow-lg mb-6">
      <span className="text-white text-base font-semibold">Filter by Fuel:</span>
      {fuels.map(({ label, icon }) => {
        const isActive = currentFilter === label;
        return (
          <button
            key={label}
            onClick={() => onChange(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a]"
              }`}
          >
            {icon}
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
