import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Apply from './pages/Apply';
import FixTop from './FixTop';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <FixTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
