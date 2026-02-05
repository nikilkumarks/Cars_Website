import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGasPump, FaCogs, FaChair, FaTachometerAlt, FaRupeeSign, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { carService } from "../services/carService";

const CarDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [car, setCar] = useState(location.state?.car || null);
  const [loading, setLoading] = useState(!location.state?.car);
  const [relatedCars, setRelatedCars] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCar = async () => {
      if (!car) {
        setLoading(true);
        const fetched = await carService.getCarById(id);
        if (fetched) {
          setCar(fetched);
        }
        setLoading(false);
      }

      if (car || id) {
        const currentCar = car || await carService.getCarById(id);
        if (currentCar) {
          const related = await carService.getModels(currentCar.brand);
          setRelatedCars(related.filter(c => c.id !== id).slice(0, 3));
        }
      }
    };
    fetchCar();
  }, [id, car]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-dark text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-6">
          <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-bg-dark text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl font-black font-outfit text-white/10 mb-4">404</h1>
            <p className="text-xl text-white/40 mb-8 uppercase tracking-widest font-bold">Car Not Found</p>
            <Link to="/CarList" className="bg-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest inline-block">
              Back to Inventory
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bg-dark text-white min-h-screen flex flex-col selection:bg-primary">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <Link to="/CarList" className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Inventory
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Gallery/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <img src={car.image} className="w-full h-full object-cover" alt="" />
              <div className="absolute top-8 left-8">
                <span className="glass px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest text-primary border border-primary/20">
                  Live Selection
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square rounded-3xl overflow-hidden glass border border-white/5 cursor-pointer hover:border-primary/50 transition-all">
                  <img src={car.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-8">
              <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">{car.brand}</p>
              <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase leading-tight mb-6">
                {car.model}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black font-outfit text-white">₹{(car.price / 10000000).toFixed(2)} Cr</span>
                <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Estimated Price</span>
              </div>
            </div>

            <div className="h-px bg-white/5 mb-8" />

            {/* Main Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { label: "Engine", value: car.engine || "N/A", icon: <FaCogs /> },
                { label: "Power", value: car.power || "N/A", icon: <FaTachometerAlt /> },
                { label: "0-100 km/h", value: car.acceleration || "N/A", icon: <FaCheckCircle /> },
                { label: "Top Speed", value: car.topSpeed || "N/A", icon: <FaCheckCircle /> },
              ].map((spec, i) => (
                <div key={i} className="glass p-6 rounded-3xl border border-white/5">
                  <div className="text-primary text-xl mb-3">{spec.icon}</div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{spec.label}</p>
                  <p className="text-white font-bold text-sm">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all active:scale-95">
                Inquire for Details
              </button>
              <button className="w-full bg-white/5 hover:bg-white/10 text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/5 transition-all">
                Download Technical Data
              </button>
            </div>
          </motion.div>
        </div>

        {/* Detailed Specs Section */}
        <section className="mt-24 bg-white/5 rounded-[4rem] md:mx-12 py-24 border border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-black font-outfit uppercase mb-12 border-l-4 border-primary pl-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
              {[
                { label: "Transmission", value: car.transmission, icon: <FaCogs /> },
                { label: "Fuel Type", value: car.fuel, icon: <FaGasPump /> },
                { label: "Mileage", value: `${car.mileage} km/l`, icon: <FaTachometerAlt /> },
                { label: "Seating Capacity", value: `${car.seats} Person`, icon: <FaChair /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="bg-primary/10 p-5 rounded-2xl text-primary text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-bold text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cars */}
        <section className="mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl font-black font-outfit uppercase">More from <span className="text-primary italic">TorqueZone</span></h2>
              <Link to="/CarList" className="text-primary text-xs font-black uppercase tracking-widest hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedCars.map(rc => (
                <CarCard key={rc.id} car={rc} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetailPage;
