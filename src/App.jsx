import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./App.css";

// Importing pages for routing
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Class";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Hone/Home";
import PopupForm from "./Components/Popup";
import SEOHelmet from "./Seo/SEOHelmet";
import ScrollToTop from "./Components/ScrollToTop";




function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup only once per session
    const isClosed = sessionStorage.getItem("popupClosed");
    if (!isClosed) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupClosed", "true");
  };
  return (
    <>
      <SEOHelmet  />
      <Navbar />
      {showPopup && <PopupForm onClose={handleClose} />}
      <main style={{ paddingTop: "60px" }}>
        <ScrollToTop /> {/* add this just inside Router */}
        {" "}
        {/* Push content down */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path="/classes" element={<Classes />} /> {/* Classes Page */}
          <Route path="/gallery" element={<Gallery />} /> {/* Gallery Page */}
          {/* 404 Page (Optional) */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
