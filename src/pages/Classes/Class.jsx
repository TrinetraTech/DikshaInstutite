import React, { useState, useEffect } from "react";
import ContactPopup from "../../Components/ContactPopup";

const Classes = () => {
  const [classesData, setClassesData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Load CMS Data
  useEffect(() => {
    fetch("/content/classes.json")
      .then((res) => res.json())
      .then((data) => setClassesData(data.classes))
      .catch((err) => console.error("CMS Classes Load Error:", err));
  }, []);

  // ✅ Dynamic Categories
  const categories = [
    "All",
    ...new Set(classesData.map((cls) => cls.category)),
  ];

  // ✅ Filtering Logic
  const filteredClasses =
    activeCategory === "All"
      ? classesData
      : classesData.filter((cls) => cls.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Our Classes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Expand your knowledge with our diverse course offerings
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300"
          >
            Browse All Classes
          </button>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Classes</h2>

            {/* Filters */}
            <div className="mb-6">
              {/* Desktop Buttons */}
              <div className="hidden md:flex justify-center space-x-4">
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

              {/* Mobile Dropdown */}
              <div className="md:hidden flex justify-center">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="border rounded-lg px-4 py-2"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls, index) => (
              <div
                key={index}
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

                  <button
                    onClick={() => setShowPopup(true)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Classes;
