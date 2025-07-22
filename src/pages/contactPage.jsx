import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiSend,
} from "react-icons/fi";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#121212] to-[#1c1c1c] text-white px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
          Get In Touch
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-4">
          Whether you're looking to buy, sell, or just say hello, we're here to help you get moving.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
        >
          <ContactInfo icon={<FiMail />} label="Email" value="contact@carmart.com" />
          <ContactInfo icon={<FiPhone />} label="Phone" value="+91 98765 43210" />
          <ContactInfo icon={<FiMapPin />} label="Address" value="MG Road, Bengaluru, India" />
          <ContactInfo icon={<FiClock />} label="Hours" value="Mon–Sat: 9 AM – 7 PM" />

          <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-gray-400 mb-2">Follow us</p>
            <div className="flex gap-5 text-xl text-orange-500">
              <SocialIcon Icon={FiFacebook} />
              <SocialIcon Icon={FiInstagram} />
              <SocialIcon Icon={FiTwitter} />
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-semibold text-orange-400">Drop a Message</h2>
          <div className="space-y-4">
            <StyledInput type="text" placeholder="Your Name" />
            <StyledInput type="email" placeholder="Your Email" />
            <StyledTextArea rows="4" placeholder="Your Message" />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
          >
            <FiSend className="text-lg" />
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 rounded-2xl overflow-hidden shadow-lg border border-white/10"
      >
        <iframe
          title="CarMart Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1202065291094!2d77.61011671434432!3d12.984172990847085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b53a6b0ae5%3A0xe1ef30aaf1b0a27c!2sMG%20Road%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1625243972711!5m2!1sen!2sin"
          width="100%"
          height="300"
          className="w-full"
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

// Subcomponents
const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <span className="text-2xl text-orange-400">{icon}</span>
    <div>
      <h3 className="font-medium text-lg">{label}</h3>
      <p className="text-gray-300">{value}</p>
    </div>
  </div>
);

const StyledInput = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full bg-[#0d0d0d] border border-white/10 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
  />
);

const StyledTextArea = ({ rows, placeholder }) => (
  <textarea
    rows={rows}
    placeholder={placeholder}
    className="w-full bg-[#0d0d0d] border border-white/10 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
  ></textarea>
);

const SocialIcon = ({ Icon }) => (
  <a
    href="#"
    className="hover:scale-110 hover:text-white transition-transform duration-300"
  >
    <Icon />
  </a>
);

export default ContactPage;
