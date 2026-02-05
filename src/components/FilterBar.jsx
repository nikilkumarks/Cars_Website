import { FaGasPump, FaChargingStation, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const FilterBar = ({ currentFilter, onChange }) => {
  const fuels = [
    { label: "All", icon: <FaFilter /> },
    { label: "Petrol", icon: <FaGasPump /> },
    { label: "Electric", icon: <FaChargingStation /> },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {fuels.map(({ label, icon }) => {
        const isActive = currentFilter === label;
        return (
          <button
            key={label}
            onClick={() => onChange(label)}
            className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300
              ${isActive
                ? "bg-primary text-white shadow-2xl shadow-primary/30"
                : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
          >
            <span className="text-sm">{icon}</span>
            {label}
            {isActive && (
              <motion.div
                layoutId="filter-active"
                className="absolute inset-0 bg-primary rounded-2xl -z-10"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
