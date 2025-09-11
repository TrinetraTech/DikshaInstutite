import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaSearchPlus, FaImage, FaVideo } from "react-icons/fa";
import GalleryItem from "../../Components/GalleryItem";
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/img4.jpeg";
import img5 from "../../assets/img/img5.jpeg";
import img6 from "../../assets/img/img6.jpeg";
import img7 from "../../assets/img/img7.jpeg";
import img8 from "../../assets/img/img8.jpeg";

const Gallery = () => {
  // Sample gallery items
  const galleryItems = [
    { id: 1, type: "photo", src: img1 },
    { id: 2, type: "photo", src: img2 },
    { id: 3, type: "photo", src: img3 },
    { id: 4, type: "photo", src: img4 },
    { id: 5, type: "photo", src: img5 },
    { id: 6, type: "photo", src: img6 },
    { id: 7, type: "photo", src: img7 },
    { id: 8, type: "photo", src: img8 },
  ];

  const [filter, setFilter] = useState("all");
  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  // Institute branding colors (customize these)
  const brandColors = {
    primary: "text-blue-700",
    bgPrimary: "bg-blue-700",
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-3xl sm:text-4xl font-bold ${brandColors.primary} mb-4`}
          >
            Our Institute Moments
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our gallery of memorable moments, events, and activities
            that showcase life at our institute.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow p-1">
            {["all", "photo"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === type
                    ? `${brandColors.bgPrimary} text-white`
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {type === "photo" && <FaImage className="mr-2" />}
                {type === "video" && <FaVideo className="mr-2" />}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              variants={itemVariants}
              brandColors={brandColors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
