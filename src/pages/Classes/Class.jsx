import React, { useState } from "react";
import ContactPopup from "../../Components/ContactPopup";

const Classes = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  // Real class data
  const classes = [
    {
      id: 1,
      title: "IIT-JEE",
      icon: "🧮",
      description:
        "Intensive coaching for engineering aspirants covering Physics, Chemistry, and Mathematics. Designed for Class XI, XII students and droppers with comprehensive study material and regular assessments.",
      level: "XI–XII & Droppers",
      category: "IIT-JEE",
      price: "₹12,000",
    },
    {
      id: 2,
      title: "NEET",
      icon: "🔬",
      description:
        "Focused preparatory courses for medical entrances covering Physics, Chemistry, and Biology. Specially designed curriculum to crack NEET with high scores and secure admission in top medical colleges.",
      level: "XI–XII & Droppers",
      category: "NEET",
      price: "₹10,000",
    },
    {
      id: 3,
      title: "Foundation (XI & XII)",
      icon: "📘",
      description:
        "Strong foundation courses for Class XI and XII students focusing on board exam preparation along with competitive exam readiness. Perfect blend of conceptual learning and practical application.",
      level: "XI–XII",
      category: "Foundation",
      price: "₹8,000",
    },
    {
      id: 4,
      title: "Pre-Foundation (VII–X)",
      icon: "🎯",
      description:
        "Building strong basics for Classes VII, VIII, IX & X students. Preparation for Olympiads, NTSE, and future entrance exams with emphasis on fundamental concepts and problem-solving skills.",
      level: "VII–X",
      category: "Pre-Foundation",
      price: "₹6,000",
    },
  ];

  const categories = ["All", "IIT-JEE", "NEET", "Foundation", "Pre-Foundation"];
  const filteredClasses =
    activeCategory === "All"
      ? classes
      : classes.filter((cls) => cls.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            Discover Our Classes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-down animate-delay-100">
            Expand your knowledge with our diverse course offerings
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 animate-fade-in-up animate-delay-200">
            Browse All Classes
          </button>
        </div>
      </section>

      {/* All Classes */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Classes</h2>
            <div className="flex justify-center space-x-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls) => (
              <div
                key={cls.id}
                className="rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 bg-white"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{cls.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{cls.title}</h3>
                      <p className="text-sm mb-3 text-gray-600">{cls.level}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-600">{cls.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">{cls.price}</span>
                      <span className="text-gray-500 text-sm"> /course</span>
                    </div>
                    {/* Enroll Button */}
                    <button
                      onClick={() => setShowPopup(true)}
                      className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal (Full Screen) */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Classes;
