import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetailPage from "./pages/CarDetailPage";
import ContactPage from "./pages/contactPage";
import ComparePage from "./pages/comparePage";
import CarList from "./pages/CarListPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/CarList" element={<CarList />} />
      </Routes>
    </Router>
  );
};

export default App;
