import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaPaperPlane } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-bg-dark text-white min-h-screen flex flex-col selection:bg-primary">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Contact Us</p>
            <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase mb-4">
              Get In <span className="text-gradient-primary italic">Touch.</span>
            </h1>
            <p className="text-white/40 max-w-xl mx-auto text-sm font-medium">
              Have questions about our collection or services? Our team of experts is ready to assist you in finding your perfect drive.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  { icon: <FaEnvelope />, label: "Email", value: "concierge@torquezone.com" },
                  { icon: <FaPhoneAlt />, label: "Phone", value: "+91 800 123 4567" },
                  { icon: <FaMapMarkerAlt />, label: "Studio", value: "MG Road, Bengaluru" },
                  { icon: <FaClock />, label: "Hours", value: "Mon–Sat: 10 AM – 8 PM" }
                ].map((item, i) => (
                  <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/5 flex items-center gap-6 group hover:border-primary/20 transition-all">
                    <div className="bg-primary/10 p-5 rounded-2xl text-primary text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{item.label}</p>
                      <p className="text-white font-bold text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass p-8 rounded-[2.5rem] border border-white/5">
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-6 text-center">Follow our journey</p>
                <div className="flex justify-center gap-8">
                  {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                    <a key={i} href="#" className="text-white/20 hover:text-primary text-2xl transition-colors">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <form className="glass p-12 rounded-[3.5rem] border border-white/5 shadow-2xl space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-4">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-4">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-4">Subject</label>
                  <select className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none">
                    <option className="bg-bg-dark">Sales Inquiry</option>
                    <option className="bg-bg-dark">Service Booking</option>
                    <option className="bg-bg-dark">Sell Your Car</option>
                    <option className="bg-bg-dark">Others</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-4">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary hover:bg-primary-dark text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                  Send Message <FaPaperPlane className="text-xs" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-24 px-6 max-w-7xl mx-auto">
          <div className="rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl h-[400px] relative grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe
              title="TorqueZone Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1202065291094!2d77.61011671434432!3d12.984172990847085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b53a6b0ae5%3A0xe1ef30aaf1b0a27c!2sMG%20Road%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1625243972711!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute inset-x-0 bottom-0 p-8 glass flex items-center justify-between border-t-0 border-x-0">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Showroom Open Today</span>
              </div>
              <a href="https://maps.google.com" target="_blank" className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline">Get Directions</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
