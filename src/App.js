// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext"; // Import the ModalProvider
import Header from "./components/Header";
import Info from "./components/Info";
import  Payment from "./components/Payment";
import Success from "./components/Success";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

function App() {
  return (
    <ModalProvider>
      {" "}
      {/* Wrap everything with ModalProvider */}
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop /> {/* Add ScrollToTop component here */}
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/info" element={<Info />} />
               <Route path="/payment" element={<Payment />} />
               <Route path="/success" element={<Success />} /> 
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
