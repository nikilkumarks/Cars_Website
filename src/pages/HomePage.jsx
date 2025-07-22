import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import CarCard from "../components/CarCard";
import CarComparison from "../components/CarComparison";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dummyCars = [
  {
    id: 2,
    brand: "Lamborghini",
    model: "Huracan EVO",
    price: 32000000,
    fuel: "Petrol",
    mileage: 7,
    transmission: "Automatic",
    seats: 2,
    image: "/assets/cars/sports.jpg",
  },
  {
    id: 3,
    brand: "Rolls Royce",
    model: "Ghost",
    price: 68000000,
    fuel: "Petrol",
    mileage: 6,
    transmission: "Automatic",
    seats: 5,
    image: "/assets/cars/Rolls Royce.jpg",
  },
  {
    id: 4,
    brand: "Mercedes-Benz",
    model: "G63 AMG",
    price: 25000000,
    fuel: "Petrol",
    mileage: 8,
    transmission: "Automatic",
    seats: 5,
    image: "/assets/cars/Mercedez.avif",
  },
];

const HomePage = () => {
  const [filterFuel, setFilterFuel] = useState("All");
  const [selectedCars, setSelectedCars] = useState([]);

  const filteredCars =
    filterFuel === "All"
      ? dummyCars
      : dummyCars.filter((car) => car.fuel === filterFuel);

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
    <div className="bg-[#0b0b0b] text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Filter and Car Cards */}
        <motion.div
          className="max-w-7xl mx-auto px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FilterBar
            currentFilter={filterFuel}
            onChange={(val) => setFilterFuel(val)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isSelected={selectedCars.some((c) => c.id === car.id)}
                onCompareToggle={() => toggleCompare(car)}
              />
            ))}
          </div>

          {selectedCars.length >= 2 && (
            <div className="mt-12">
              <CarComparison cars={selectedCars} />
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
