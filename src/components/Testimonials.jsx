import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "CEO, TechFlow",
        content: "The best car buying experience I've ever had. TorqueZone's collection is unparalleled and their service is top-notch.",
        image: "https://i.pravatar.cc/150?u=alex",
        rating: 5
    },
    {
        name: "Sarah Miller",
        role: "Professional Driver",
        content: "Found my dream Huracan here. The comparison tool really helped me make the final decision. Highly recommended!",
        image: "https://i.pravatar.cc/150?u=sarah",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Entrepreneur",
        content: "Exclusive cars, transparent pricing, and a smooth process. TorqueZone is the future of luxury car showcases.",
        image: "https://i.pravatar.cc/150?u=david",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Social Proof
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white font-outfit uppercase"
                    >
                        What Our <span className="text-gradient-primary">Clients Say</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl border border-white/5 relative group"
                        >
                            <FaQuoteLeft className="text-primary/20 text-4xl absolute top-6 right-8 group-hover:text-primary/40 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500 text-xs" />
                                ))}
                            </div>

                            <p className="text-white/60 leading-relaxed mb-8 italic">"{item.content}"</p>

                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                                <div>
                                    <h4 className="text-white font-bold text-sm tracking-wide">{item.name}</h4>
                                    <p className="text-white/40 text-xs font-medium">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
