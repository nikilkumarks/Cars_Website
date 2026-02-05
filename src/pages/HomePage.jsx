import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import CarCard from "../components/CarCard";
import CarComparison from "../components/CarComparison";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import { carService } from "../services/carService";

const Brands = () => {
  const logos = [
    "Lamborghini", "Ferrari", "Porsche", "Mercedes", "BMW", "Audi", "Tesla", "Bentley"
  ];
  return (
    <div className="py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-12">Trusted by Global Enthusiasts</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map(logo => (
            <span key={logo} className="text-2xl font-black font-outfit uppercase tracking-tighter">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterFuel, setFilterFuel] = useState("All");
  const [selectedCars, setSelectedCars] = useState([]);

  useEffect(() => {
    const fetchInitialCars = async () => {
      setLoading(true);
      const allCars = await carService.getModels();
      setCars(allCars);
      setLoading(false);
    };
    fetchInitialCars();
  }, []);

  const filteredCars =
    filterFuel === "All"
      ? cars
      : cars.filter((car) => car.fuel === filterFuel);

  const toggleCompare = (car) => {
    setSelectedCars((prev) => {
      if (prev.find((c) => c.id === car.id)) {
        return prev.filter((c) => c.id !== car.id);
      } else {
        return prev.length < 3 ? [...prev, car] : prev;
      }
    });
  };

  return (
    <div className="bg-bg-dark text-white min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <Brands />

        {/* Inventory Section */}
        <section id="inventory" className="py-24 relative">
          {/* Background Mesh */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
                >
                  Premium Inventory
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black text-white font-outfit uppercase"
                >
                  Find Your <span className="text-gradient-primary italic">Perfect Drive.</span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <FilterBar
                  currentFilter={filterFuel}
                  onChange={(val) => setFilterFuel(val)}
                />
              </motion.div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-[400px] rounded-[3rem] bg-white/5 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredCars.map((car, i) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    isSelected={selectedCars.some((c) => c.id === car.id)}
                    onCompareToggle={() => toggleCompare(car)}
                  />
                ))}
              </div>
            )}

            <AnimatePresence>
              {selectedCars.length >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] w-full max-w-2xl px-6"
                >
                  <div className="glass p-6 rounded-[2.5rem] shadow-2xl border border-primary/20 flex items-center justify-between">
                    <div className="flex gap-4">
                      {selectedCars.map(car => (
                        <div key={car.id} className="relative group">
                          <img src={car.image} className="w-16 h-12 object-cover rounded-xl border border-white/10" alt="" />
                          <button
                            onClick={() => toggleCompare(car)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      {selectedCars.length < 3 && (
                        <div className="w-16 h-12 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-white/20 text-xs">
                          +{3 - selectedCars.length}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-6">
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest hidden sm:block">
                        {selectedCars.length} Cars Ready
                      </p>
                      <Link to="/compare" state={{ cars: selectedCars }}>
                        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                          Compare Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Features />

        <Testimonials />

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
