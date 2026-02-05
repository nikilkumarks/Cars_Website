import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaGlobeAsia, FaClock, FaTags } from "react-icons/fa";

const features = [
    {
        title: "Global Shipping",
        desc: "We deliver your dream car to your doorstep, anywhere in the world.",
        icon: <FaGlobeAsia />
    },
    {
        title: "Verified Quality",
        desc: "Every vehicle goes through a rigorous 200-point inspection process.",
        icon: <FaShieldAlt />
    },
    {
        title: "Instant Financing",
        desc: "Get pre-approved in minutes with our flexible finance partners.",
        icon: <FaClock />
    },
    {
        title: "Best Price",
        desc: "Transparent pricing without any hidden fees or dealer markups.",
        icon: <FaTags />
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-white/5 backdrop-blur-3xl rounded-[4rem] mx-4 md:mx-12 my-12 border border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {f.icon}
                            </div>
                            <h3 className="text-white text-xl font-bold font-outfit uppercase mb-3 tracking-wide">{f.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
