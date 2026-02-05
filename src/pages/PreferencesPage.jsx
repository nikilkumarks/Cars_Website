import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCog, FaGlobe, FaBell, FaDatabase, FaShieldAlt, FaMoon } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PreferencesPage = () => {
    const [settings, setSettings] = useState({
        notifications: true,
        highResImages: true,
        autoPlay: false,
        currency: "INR",
        measurement: "Metric"
    });

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const sections = [
        {
            title: "Experience",
            icon: <FaCog />,
            items: [
                { id: "highResImages", label: "Ultra High-Res Assets", desc: "Always load 4K quality imagery for showroom view.", type: "toggle" },
                { id: "autoPlay", label: "Auto-play Cinematics", desc: "Enable video backgrounds and ambient motion automatically.", type: "toggle" }
            ]
        },
        {
            title: "Marketplace Defaults",
            icon: <FaGlobe />,
            items: [
                { id: "currency", label: "Preferred Currency", desc: "Global pricing will be converted to this currency.", type: "select", options: ["INR", "USD", "EUR", "AED"] },
                { id: "measurement", label: "Measurement Units", desc: "Switch between Metric (km/h) and Imperial (mph).", type: "select", options: ["Metric", "Imperial"] }
            ]
        },
        {
            title: "Security & Privacy",
            icon: <FaShieldAlt />,
            items: [
                { id: "notifications", label: "Launch Alerts", desc: "Receive notifications about new exclusive limited edition arrivals.", type: "toggle" }
            ]
        }
    ];

    return (
        <div className="bg-bg-dark text-white min-h-screen flex flex-col selection:bg-primary">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <section className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Elite Settings</p>
                        <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase mb-4">
                            Preferences
                        </h1>
                    </motion.div>

                    <div className="space-y-12">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4 py-4 border-b border-white/5">
                                    <div className="bg-primary/10 p-3 rounded-xl text-primary text-xl">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-xl font-black font-outfit uppercase tracking-wider">{section.title}</h2>
                                </div>

                                <div className="grid gap-4">
                                    {section.items.map((item) => (
                                        <div key={item.id} className="glass p-8 rounded-[2rem] border border-white/5 flex items-center justify-between group hover:border-primary/20 transition-all">
                                            <div className="max-w-md">
                                                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.label}</h3>
                                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                            </div>

                                            {item.type === "toggle" ? (
                                                <button
                                                    onClick={() => toggleSetting(item.id)}
                                                    className={`w-14 h-8 rounded-full relative transition-all duration-300 ${settings[item.id] ? "bg-primary" : "bg-white/10"}`}
                                                >
                                                    <motion.div
                                                        animate={{ x: settings[item.id] ? 28 : 4 }}
                                                        className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                                                    />
                                                </button>
                                            ) : (
                                                <div className="relative">
                                                    <select
                                                        value={settings[item.id]}
                                                        onChange={(e) => setSettings(prev => ({ ...prev, [item.id]: e.target.value }))}
                                                        className="bg-white/5 border border-white/10 rounded-xl py-3 px-6 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer"
                                                    >
                                                        {item.options.map(opt => <option key={opt} value={opt} className="bg-bg-dark">{opt}</option>)}
                                                    </select>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div>
                            <h3 className="text-xl font-bold font-outfit uppercase mb-1 text-primary">Data Synchronized</h3>
                            <p className="text-white/40 text-sm">Your preferences are securely synced across your luxury hardware collection.</p>
                        </div>
                        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all w-full md:w-auto">
                            Save Changes
                        </button>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PreferencesPage;
