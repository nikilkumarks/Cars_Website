import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaTrash, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { carService } from "../services/carService";
import { Link } from "react-router-dom";

const CollectionPage = () => {
    const [savedCars, setSavedCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mocking a saved collection from local storage logic
        const fetchSaved = async () => {
            setLoading(true);
            const all = await carService.getModels();
            // Just pick 3 random ones as "saved" for demonstration
            setSavedCars(all.slice(0, 3));
            setLoading(false);
        };
        fetchSaved();
    }, []);

    const removeCar = (id) => {
        setSavedCars(prev => prev.filter(c => c.id !== id));
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
                        <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Personal Curator</p>
                        <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase mb-4">
                            My <span className="text-gradient-primary">Collection</span>
                        </h1>
                        <p className="text-white/40 max-w-xl mx-auto text-sm font-medium">
                            Your privately curated selection of the world's finest automotive engineering.
                        </p>
                    </motion.div>
                </section>

                <section className="max-w-7xl mx-auto px-6">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-[400px] rounded-[3rem] bg-white/5 animate-pulse" />
                            ))}
                        </div>
                    ) : savedCars.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <AnimatePresence mode="popLayout">
                                {savedCars.map((car) => (
                                    <motion.div
                                        key={car.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        className="relative"
                                    >
                                        <CarCard car={car} />
                                        <button
                                            onClick={() => removeCar(car.id)}
                                            className="absolute top-6 right-6 z-20 bg-red-500/80 hover:bg-red-500 text-white p-3 rounded-2xl backdrop-blur-md transition-all group shadow-xl"
                                        >
                                            <FaTrash className="text-xs group-hover:scale-110 transition-transform" />
                                        </button>
                                    </motion.div>
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
                            <h3 className="text-2xl font-bold font-outfit uppercase mb-2">Collection is Empty</h3>
                            <p className="text-white/40 mb-8">Start adding your dream cars to your personal vault.</p>
                            <Link to="/CarList" className="bg-primary px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest inline-flex items-center gap-3 active:scale-95 transition-all shadow-2xl shadow-primary/20">
                                Explore Inventory <FaArrowRight />
                            </Link>
                        </motion.div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CollectionPage;
