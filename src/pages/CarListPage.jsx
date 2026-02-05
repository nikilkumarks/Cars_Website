import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaFilter, FaRedo } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { carService } from "../services/carService";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [makes, setMakes] = useState(["All"]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const [fetchedMakes, allCars] = await Promise.all([
        carService.getMakes(),
        carService.getModels()
      ]);
      setMakes(fetchedMakes); // Makes already include "All"
      setCars(allCars);
      setLoading(false);
    };
    init();
  }, []);

  const handleBrandChange = async (brand) => {
    setSelectedBrand(brand);
    setLoading(true);
    const results = await carService.getModels(brand);
    setCars(results);
    setLoading(false);
  };

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase());
      const matchesFuel = selectedFuel === "All" || car.fuel === selectedFuel;
      return matchesSearch && matchesFuel;
    });
  }, [cars, search, selectedFuel]);

  const resetFilters = async () => {
    setSearch("");
    setSelectedBrand("All");
    setSelectedFuel("All");
    setLoading(true);
    const all = await carService.getModels();
    setCars(all);
    setLoading(false);
  };

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
            <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">The Selection</p>
            <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase mb-12">
              Our <span className="text-gradient-primary">Inventory</span>
            </h1>

            <div className="glass p-4 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full group">
                <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search by brand or model..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <select
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none cursor-pointer flex-grow min-w-[140px]"
                >
                  {makes.map(b => <option key={b} value={b} className="bg-bg-dark">{b === "All" ? "Every Brand" : b}</option>)}
                </select>

                <select
                  value={selectedFuel}
                  onChange={(e) => setSelectedFuel(e.target.value)}
                  className="bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none cursor-pointer flex-grow min-w-[140px]"
                >
                  <option value="All" className="bg-bg-dark">All Fuels</option>
                  <option value="Petrol" className="bg-bg-dark">Petrol</option>
                  <option value="Electric" className="bg-bg-dark">Electric</option>
                </select>

                <button
                  onClick={resetFilters}
                  className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all text-white/40 hover:text-white"
                >
                  <FaRedo className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {loading ? (
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-[400px] rounded-[3rem] bg-white/5 animate-pulse" />
              ))}
            </div>
          </section>
        ) : (
          <>
            {/* Results Info */}
            <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                Showing {filteredCars.length} results
              </p>
            </div>

            <section className="max-w-7xl mx-auto px-6">
              {filteredCars.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  <AnimatePresence mode="popLayout">
                    {filteredCars.map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-32 text-center"
                >
                  <div className="text-white/5 text-9xl font-black mb-8 select-none">EMPTY</div>
                  <h3 className="text-2xl font-bold font-outfit uppercase mb-2">No cars found</h3>
                  <p className="text-white/40 mb-8">Try adjusting your filters or search term.</p>
                  <button
                    onClick={resetFilters}
                    className="bg-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CarList;
