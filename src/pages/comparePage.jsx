import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTimes, FaCheck, FaCrown } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { carService } from "../services/carService";

const ComparePage = () => {
  const location = useLocation();
  const [selected, setSelected] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (location.state?.cars) {
      setSelected(location.state.cars);
    }
    const fetchRecs = async () => {
      const recs = await carService.getModels("Lamborghini");
      setRecommendations(recs.slice(0, 5));
    };
    fetchRecs();
  }, [location.state]);

  const toggleCompare = (car) => {
    const exists = selected.find((c) => c.id === car.id);
    if (exists) {
      setSelected(selected.filter((c) => c.id !== car.id));
    } else if (selected.length < 3) {
      setSelected([...selected, car]);
    }
  };

  const bestValuePrice =
    selected.length > 0 ? Math.min(...selected.map((c) => c.price)) : null;

  return (
    <div className="bg-bg-dark text-white min-h-screen flex flex-col selection:bg-primary">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Comparison</p>
            <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase mb-4">
              Side By <span className="text-gradient-primary">Side</span>
            </h1>
            <p className="text-white/40 max-w-xl mx-auto text-sm font-medium">
              Compare your favorite models to find the one that perfectly fits your lifestyle and performance expectations.
            </p>
          </motion.div>
        </section>

        {/* Selected Area */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[0, 1, 2].map(index => {
            const car = selected[index];
            return (
              <div key={index} className="relative group">
                {car ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-6 rounded-[3rem] border border-primary/20"
                  >
                    <button
                      onClick={() => toggleCompare(car)}
                      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:scale-110 transition-transform z-10"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                    <img src={car.image} className="w-full h-48 object-cover rounded-[2rem] mb-6" alt="" />
                    <h3 className="text-2xl font-black font-outfit uppercase tracking-tight">{car.brand} <br /> <span className="text-primary italic">{car.model}</span></h3>
                  </motion.div>
                ) : (
                  <div className="h-full min-h-[300px] rounded-[3rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-white/10 group-hover:border-primary/20 transition-colors">
                    <FaPlus className="text-4xl mb-4 group-hover:text-primary transition-colors" />
                    <p className="font-bold text-xs uppercase tracking-widest">Add a Car</p>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Comparison Table */}
        {selected.length >= 2 ? (
          <section className="max-w-5xl mx-auto px-6">
            <div className="glass rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
              <table className="w-full text-left">
                <tbody>
                  {[
                    ["Ex-Showroom Price", (c) => `₹${(c.price / 10000000).toFixed(2)} Cr`, true],
                    ["Fuel Type", (c) => c.fuel],
                    ["Mileage", (c) => `${c.mileage} km/l`],
                    ["Transmission", (c) => c.transmission],
                    ["Seating", (c) => `${c.seats} Persons`],
                  ].map(([label, getValue, isPrice], idx) => (
                    <tr key={idx} className="border-b border-white/5 last:border-0 group">
                      <td className="p-8 font-black uppercase text-[10px] tracking-[0.3em] text-white/40 w-1/4 align-middle bg-white/2 group-hover:text-primary transition-colors">
                        {label}
                      </td>
                      {selected.map((car) => (
                        <td key={car.id} className="p-8 align-middle">
                          <div className="flex flex-col">
                            {isPrice && car.price === bestValuePrice && (
                              <span className="text-primary flex items-center gap-2 text-[8px] font-black uppercase tracking-widest mb-1">
                                <FaCrown /> Best Value
                              </span>
                            )}
                            <span className={`text-xl font-bold font-outfit ${isPrice && car.price === bestValuePrice ? "text-primary text-2xl" : "text-white"}`}>
                              {getValue(car)}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaPlus className="text-white/20 text-3xl" />
            </div>
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-relaxed">
              Select at least 2 cars <br /> to see comparison details
            </p>
          </div>
        )}

        {/* Quick Selection */}
        <section className="mt-32 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black font-outfit uppercase mb-12 border-l-4 border-primary pl-6">Recommended for Comparison</h2>
          <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar">
            {recommendations.filter(c => !selected.find(s => s.id === c.id)).map(car => (
              <motion.div
                key={car.id}
                whileHover={{ y: -5 }}
                onClick={() => toggleCompare(car)}
                className="min-w-[280px] glass p-4 rounded-[2.5rem] border border-white/5 cursor-pointer group"
              >
                <div className="relative rounded-3xl overflow-hidden mb-4 h-40">
                  <img src={car.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                </div>
                <h4 className="font-black uppercase text-sm">{car.brand} {car.model}</h4>
                <p className="text-primary font-bold text-xs mt-1">₹{(car.price / 10000000).toFixed(2)} Cr</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComparePage;
