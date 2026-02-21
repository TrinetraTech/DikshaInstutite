import React, { useState, useEffect } from "react";
import { FaImage, FaVideo } from "react-icons/fa";
import GalleryItem from "../../Components/GalleryItem";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [filter, setFilter] = useState("all");

  // ✅ Load CMS Data
  useEffect(() => {
    fetch("/content/gallery.json")
      .then((res) => res.json())
      .then((data) => setGalleryItems(data.items))
      .catch((err) => console.error("CMS Gallery Load Error:", err));
  }, []);

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  const categories = ["all", "photo", "video"];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
            Our Institute Moments
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our gallery of memorable moments, events, and activities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow p-1">
            {categories.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === type
                    ? "bg-blue-700 text-white"
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <GalleryItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
