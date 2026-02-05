import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetailPage from "./pages/CarDetailPage";
import ContactPage from "./pages/contactPage";
import ComparePage from "./pages/comparePage";
import CarList from "./pages/CarListPage";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import CollectionPage from "./pages/CollectionPage";
import PreferencesPage from "./pages/PreferencesPage";
import { useScroll, motion } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />

      {/* Absolute Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/CarList" element={<CarList />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
