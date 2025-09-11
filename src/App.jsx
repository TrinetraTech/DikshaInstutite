import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./App.css";

// Importing pages for routing
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Class";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blogage";
import Home from "./pages/Hone/Home";
import PopupForm from "./Components/popup";
import SEOHelmet from "./Seo/SEOHelmet";
import ScrollToTop from "./Components/ScrollToTop";

import StudentLayout from "./Student_potal/StudentLayout";
import StudentDashboard from "./Student_potal/StudentDashboard";
import NotesPage from "./Student_potal/NotesPage";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isClosed = sessionStorage.getItem("popupClosed");
    if (!isClosed) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  // ✅ Hide main layout if on /student routes
  const hideLayout = location.pathname.startsWith("/student");

  return (
    <>
      <SEOHelmet />
      {!hideLayout && <Navbar />}
      {showPopup && !hideLayout && <PopupForm onClose={handleClose} />}
      <main style={{ paddingTop: hideLayout ? "0px" : "60px" }}>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />

          {/* ✅ Student Routes with Layout */}
          <Route element={<StudentLayout />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/notes" element={<NotesPage />} />
          </Route>

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
